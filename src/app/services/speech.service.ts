export function getSpeechService(): ASpeech {
  const _window: any = window;
  if (window && window.speechSynthesis) {
    return new Html5Speech(window.speechSynthesis);
  }
  
  console.error("No window.sppechSynthesis in this browser");
}

export abstract class ASpeech {
  public abstract getLanguages(): string[];
  public abstract say(whatToSay: string, language?:string): void;
}

class Html5Speech implements ASpeech {
  private voices: {[name:string]: SpeechSynthesisVoice} = {};

  constructor(private api: SpeechSynthesis) {
    api.onvoiceschanged = () => this.setVoices();
  }

  public getLanguages(): string[] {
    return Object.keys(this.voices);
  }

  private setVoices(): void {
    this.api.getVoices().forEach(voice => this.voices[voice.name]=voice);
    if (Object.keys(this.voices).length == 0) {
      console.error("No voice for speech");
    }
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
      voiceName = Object.keys(this.voices)[0];
      console.log("Voice is set to " + voiceName);
    }

    const utterance = new SpeechSynthesisUtterance(phrase);

    utterance.voice = this.voices[voiceName];
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
      console.log("Error when saying " + phrase + ": " + event.error);
    }

    this.api.speak(utterance);
  }

}
