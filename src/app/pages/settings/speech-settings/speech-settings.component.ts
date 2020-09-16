import { Component, OnInit, OnDestroy } from '@angular/core';
import { ASpeech, SpeechConfig } from 'src/app/services/speech.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'speech-settings',
  templateUrl: './speech-settings.component.html',
  styleUrls: ['./speech-settings.component.scss'],
})
export class SpeechSettingsComponent implements OnInit, OnDestroy {
  private speechConfig: SpeechConfig = <SpeechConfig>{pitch: 0, rate: 0, volume: 0};
  public voiceNames: string[] = [];
  private voiceName$: Subscription;

  set voiceName(name: string) {
    this.speechConfig.voiceName = name;
    this.speechService.setConfig(this.speechConfig);
  }

  set pitch(p: number) {
    this.speechConfig.pitch = p;
    this.speechService.setConfig(this.speechConfig);
  }

  set rate(r: number) {
    this.speechConfig.rate = r;
    this.speechService.setConfig(this.speechConfig);
  }

  set volume(v: number) {
    this.speechConfig.volume = v;
    this.speechService.setConfig(this.speechConfig);
  }

  get pitch(): number {
    return this.speechConfig.pitch;
  }

  get rate(): number {
    return this.speechConfig.rate;

  }

  get volume(): number {
    return this.speechConfig.volume;
  }

  get voiceName(): string {
    return this.speechConfig.voiceName;
  }

  constructor(private speechService: ASpeech) {
    this.voiceName$ = this.speechService.$languageNames.subscribe(names => this.voiceNames = names);
  }

  ngOnInit() {
    this.speechConfig = this.speechService.getConfig();
  }

  ngOnDestroy() {
    this.voiceName$.unsubscribe();
  }

}
