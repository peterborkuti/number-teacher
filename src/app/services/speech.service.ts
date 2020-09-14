import { Observable, Subject } from 'rxjs';

export function getSpeechService(): ASpeech {
  const _window: any = window;
  if (window && window.speechSynthesis) {
    return new Html5Speech(window.speechSynthesis);
  }
  
  console.error("No window.sppechSynthesis in this browser");
}

export class SpeechConfig {
  pitch: number;
  rate: number;
  volume: number;
  voiceName: string;
}

export abstract class ASpeech {
  public abstract getConfig(): SpeechConfig;
  public abstract setConfig(config: SpeechConfig);
  public abstract readonly $languageNames: Subject<string[]>;
  public abstract say(whatToSay: string, language?:string): void;
}

class Html5Speech implements ASpeech {
  public readonly $languageNames = new Subject<string[]>();

  private voices: {[name:string]: SpeechSynthesisVoice} = {};
  private config: SpeechConfig = <SpeechConfig>{rate: 1, volume: 1, pitch: 1, voiceName: ''};

  constructor(private api: SpeechSynthesis) {
    api.onvoiceschanged = () => this.setVoices();
  }

  public getConfig(): SpeechConfig {
    return Object.assign({}, this.config);
  }

  public setConfig(config: SpeechConfig) {
    this.config = Object.assign({}, config);
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
      console.error('Api is already speaking. Quiting without saying:' + phrase);
      return;
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
