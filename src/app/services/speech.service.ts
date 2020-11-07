import { Subject, BehaviorSubject, Observable, from } from 'rxjs';
import { TextToSpeech, TTSOptions } from '@ionic-native/text-to-speech/ngx';
import ISO6391 from 'iso-639-1';
import { StorageWrapperService } from './storage/storage-wrapper.service';
import { takeUntil } from 'rxjs/operators';
import { OnDestroy } from '@angular/core';
import { Config } from '@ionic/angular';


export const speechServiceFactory = (storage: StorageWrapperService, tts?: TextToSpeech) => {
  const _window: any = window;
  if (window && window.speechSynthesis && window.speechSynthesis.speak) {
    return new Html5Speech(window.speechSynthesis, storage);
  }
  if (tts) {
    return new TTSSpeech(tts);
  }
  
  console.error("No speech api in this environment");

  return new DummySpeech();
}

export const NO_LANGUAGENAMES = 'No voices';

export class SpeechConfig {
  rate: number = 1;
  pitch: number = 1;
  volume: number = 1;
  voiceName: string = NO_LANGUAGENAMES;

  constructor(rate?: number, pitch?: number, volume?: number, voicename?: string) {
    if (pitch !== undefined) this.pitch = pitch;
    if (rate !== undefined) this.rate = rate;
    if (volume !== undefined) this.volume = volume;
    if (voicename !== undefined) this.voiceName = voicename;
  }
}

export abstract class ASpeech {
  config: SpeechConfig = new SpeechConfig();
  public abstract say(whatToSay: string, language?:string): void;

  public abstract watchSpeechConfig(): Observable<SpeechConfig>;

  public setConfig(config: SpeechConfig) {
    this.config = Object.assign({}, config);
  }

  public abstract watchLanguageNames(): Observable<string[]>;
}

export class DummySpeech extends ASpeech {
  constructor() {
    super();
  }

  public watchSpeechConfig(): Observable<SpeechConfig> {
    return from([new SpeechConfig()]);
  }

  public say(whatToSay: string, language?: string): void {
    console.log("Dummy says: " + whatToSay);
  }

  public watchLanguageNames(): Observable<string[]> {
    return from([['No voices']]);
  }
}

class TTSSpeech extends ASpeech {
  constructor(private api: TextToSpeech) {
    super();
  }

  public say(whatToSay: string, language?: string): void {
    const options: TTSOptions = <TTSOptions>{
      text: whatToSay,
      locale: this.getLocale(language),
      rate: this.config.rate
    };

    this.api.speak(options)
  }

  private getLocale(language?: string) {
    if (!this.config.voiceName) {
      this.config.voiceName = ISO6391.getAllNames()[0];
    }

    return language ? language : this.config.voiceName;
  }


  public watchLanguageNames(): Observable<string[]> {
    return from([ISO6391.getAllNames()]);
  }

  /**
   * @todo
   */
  public watchSpeechConfig(): Observable<SpeechConfig> {
    return from([new SpeechConfig()]);
  }
}

/**
 * maps x (which should be between 0 and 100) to [min, max]
 * @param x map
 * @param min 
 * @param max 
 */
export function mapToRange(x: number, min: number, max: number): number {
  return min + (max - min) / 100.0 * x
}

/**
 * maps x from [min, max] to [0, 100]
 * @param x map
 * @param min 
 * @param max 
 */
export function mapFromRange(x: number, min: number, max: number): number {
  return Math.round((x - min) * 100 / (max - min));
}

class Html5Speech extends ASpeech implements OnDestroy {
  private readonly RATE_INTERVAL = [0.1, 2];
  private readonly PITCH_INTERVAL = [0, 2];
  private readonly VOLUME_INTERVAL = [0, 1];

  private voices: {[name:string]: SpeechSynthesisVoice} = {};
  private languageNames$ = new BehaviorSubject<string[]>([NO_LANGUAGENAMES]);
  private speechConfig$ = new BehaviorSubject<SpeechConfig>(new SpeechConfig());

  private unsubscribe = new Subject();

  constructor(private api: SpeechSynthesis, private storage: StorageWrapperService) {
    super();
    api.onvoiceschanged = () => this.setVoices();
    this.storage.watchSpeechConfig().pipe(takeUntil(this.unsubscribe)).subscribe((config) => {
        this.setConfigWithoutSaving(config);
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public watchLanguageNames(): Observable<string[]> {
    return this.languageNames$;
  }

  private getConfig(): SpeechConfig {
    return new SpeechConfig(
      mapFromRange(this.config.rate, this.RATE_INTERVAL[0], this.RATE_INTERVAL[1]),
      mapFromRange(this.config.pitch, this.PITCH_INTERVAL[0], this.PITCH_INTERVAL[1]),
      mapFromRange(this.config.volume, this.VOLUME_INTERVAL[0], this.VOLUME_INTERVAL[1]),
      this.config.voiceName
    )
  }

  public watchSpeechConfig(): Observable<SpeechConfig> {
    return this.speechConfig$;
  }

  private setConfigWithoutSaving(config: SpeechConfig) {
    this.config.rate = mapToRange(config.rate, this.RATE_INTERVAL[0], this.RATE_INTERVAL[1]);
    this.config.pitch = mapToRange(config.pitch, this.PITCH_INTERVAL[0], this.PITCH_INTERVAL[1]);
    this.config.volume = mapToRange(config.volume, this.VOLUME_INTERVAL[0], this.VOLUME_INTERVAL[1]);
    this.config.voiceName = config.voiceName;

    this.speechConfig$.next(this.getConfig());    
  }

  public setConfig(config: SpeechConfig) {
    this.setConfigWithoutSaving(config);
    this.storage.saveSpeechConfig(config);
  }

  private setVoices(): void {
    this.api.getVoices().forEach(voice => this.voices[voice.name]=voice);
    if (Object.keys(this.voices).length == 0) {
      console.error("No voice for speech");
      this.languageNames$.next([NO_LANGUAGENAMES]);
    }
    else {
      this.languageNames$.next(Object.keys(this.voices));
    }
  }

  public say(phrase: string, voiceName?: string): void {
    if (this.api.speaking) {
      this.api.cancel();
    }

    if (Object.keys(this.voices).length == 0) {
      console.error("No voices");
      return;
    }

    if (!voiceName) {
      if (!this.config.voiceName) {
        this.config.voiceName = Object.keys(this.voices)[0];
      }

      voiceName = this.config.voiceName;
      console.log("Voice is set to " + voiceName);
    }

    const utterance = new SpeechSynthesisUtterance(phrase);

    console.log("Config:", this.config);

    utterance.voice = this.voices[voiceName];
    utterance.pitch = this.config.pitch;
    utterance.rate = this.config.rate;
    utterance.volume = this.config.volume;

    utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
      console.error("Error when saying " + phrase + ": " + event.error);
    }

    this.api.speak(utterance);
  }
}
