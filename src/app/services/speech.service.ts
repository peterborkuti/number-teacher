import { Subject, BehaviorSubject } from 'rxjs';
import { TextToSpeech, TTSOptions } from '@ionic-native/text-to-speech/ngx';
import ISO6391 from 'iso-639-1';
import { StorageWrapperService } from './storage/storage-wrapper.service';


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

export class SpeechConfig {
  pitch: number;
  rate: number;
  volume: number;
  voiceName: string;
}

export abstract class ASpeech {
  public readonly $languageNames = new BehaviorSubject<string[]>([]);
  config: SpeechConfig = <SpeechConfig>{rate: 1, volume: 1, pitch: 1, voiceName: ''};
  public abstract say(whatToSay: string, language?:string): void;

  public getConfig(): SpeechConfig {
    return Object.assign({}, this.config);
  }

  public setConfig(config: SpeechConfig) {
    this.config = Object.assign({}, config);
  }
}

export class DummySpeech extends ASpeech {
  constructor() {
    super();
    this.$languageNames.next(["No voices"]);
  }

  public say(whatToSay: string, language?: string): void {
    console.log("Dummy says: " + whatToSay);
  }
}

class TTSSpeech extends ASpeech {
  constructor(private api: TextToSpeech) {
    super();
    this.$languageNames.next(ISO6391.getAllNames());
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

class Html5Speech extends ASpeech {
  private readonly RATE_INTERVAL = [0.1, 2];
  private readonly PITCH_INTERVAL = [0, 2];
  private readonly VOLUME_INTERVAL = [0, 1];

  private voices: {[name:string]: SpeechSynthesisVoice} = {};

  constructor(private api: SpeechSynthesis, private storage: StorageWrapperService) {
    super();
    api.onvoiceschanged = () => this.setVoices();
    this.storage.watchSpeechConfig().subscribe((config) => {
      if (config) {
        this.setConfig(config);
      }
    })
  }

  public getConfig() {
    return <SpeechConfig>{
      rate: mapFromRange(this.config.rate, this.RATE_INTERVAL[0], this.RATE_INTERVAL[1]),
      pitch: mapFromRange(this.config.pitch, this.PITCH_INTERVAL[0], this.PITCH_INTERVAL[1]),
      volume: mapFromRange(this.config.volume, this.VOLUME_INTERVAL[0], this.VOLUME_INTERVAL[1]),
      voiceName: this.config.voiceName
    }
  }

  public setConfig(config: SpeechConfig) {
    this.config.rate = mapToRange(config.rate, this.RATE_INTERVAL[0], this.RATE_INTERVAL[1]);
    this.config.pitch = mapToRange(config.pitch, this.PITCH_INTERVAL[0], this.PITCH_INTERVAL[1]);
    this.config.volume = mapToRange(config.volume, this.VOLUME_INTERVAL[0], this.VOLUME_INTERVAL[1]);
    this.config.voiceName = config.voiceName;

    this.storage.saveSpeechConfig(config);
  }

  private setVoices(): void {
    this.api.getVoices().forEach(voice => this.voices[voice.name]=voice);
    if (Object.keys(this.voices).length == 0) {
      console.error("No voice for speech");
    }
    this.$languageNames.next(Object.keys(this.voices));
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
      console.log("Error when saying " + phrase + ": " + event.error);
    }

    this.api.speak(utterance);
  }
}
