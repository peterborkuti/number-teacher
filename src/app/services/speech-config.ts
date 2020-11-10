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