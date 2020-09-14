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
    this.speechConfig.pitch = p / 50.0;
    this.speechService.setConfig(this.speechConfig);
  }

  set rate(r: number) {
    this.speechConfig.rate = r / 50.0;
    this.speechService.setConfig(this.speechConfig);
  }

  set volume(v: number) {
    this.speechConfig.volume = v / 100.0;
    this.speechService.setConfig(this.speechConfig);
  }

  get pitch(): number {
    return this.speechConfig.pitch * 50;
  }

  get rate(): number {
    return this.speechConfig.rate * 50;

  }

  get volume(): number {
    return this.speechConfig.volume * 100;
  }

  get voiceName(): string {
    return this.speechConfig.voiceName;
  }

  constructor(private speechService: ASpeech) {
    this.voiceName$ = this.speechService.$languageNames.subscribe(names => this.voiceNames = names);
  }

  ngOnInit() {
    const conf = this.speechService.getConfig();
    this.speechConfig = {
      rate: conf.rate * 50,
      pitch: conf.pitch * 50,
      volume: conf.volume* 100,
      voiceName: conf.voiceName
    };
  }

  ngOnDestroy() {
    this.voiceName$.unsubscribe();
  }

}
