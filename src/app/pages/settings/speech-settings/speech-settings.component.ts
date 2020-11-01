import { Component, OnInit, OnDestroy } from '@angular/core';
import { ASpeech, SpeechConfig } from 'src/app/services/speech.service';
import { Subscription } from 'rxjs';
import { StorageWrapperService } from 'src/app/services/storage/storage-wrapper.service';

@Component({
  selector: 'speech-settings',
  templateUrl: './speech-settings.component.html',
  styleUrls: ['./speech-settings.component.scss'],
})
export class SpeechSettingsComponent implements OnInit, OnDestroy {
  private speechConfig: SpeechConfig = <SpeechConfig>{pitch: 0, rate: 0, volume: 0, voiceName: ''};
  public voiceNames: string[] = [];
  private voiceName$: Subscription;

  set voiceName(name: string) {
    this.speechConfig.voiceName = name;
    this.setCommon();
  }

  set pitch(p: number) {
    this.speechConfig.pitch = p;
    this.setCommon();
  }

  set rate(r: number) {
    this.speechConfig.rate = r;
    this.setCommon();
  }

  set volume(v: number) {
    this.speechConfig.volume = v;
    this.setCommon();
  }

  private setCommon() {
    this.speechService.setConfig(this.speechConfig);
    this.storage.saveSpeechConfig(this.speechConfig);

    this.speechService.say("123");
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

  constructor(private speechService: ASpeech, private storage: StorageWrapperService) {

    this.voiceName$ = this.speechService.$languageNames.subscribe(names => this.voiceNames = names);
    this.storage.watchSpeechConfig().subscribe((config) => {
      if (config) {
        this.speechConfig = config
        this.setCommon();
    }});
  }

  ngOnInit() {
    this.speechConfig = this.speechService.getConfig();
  }

  ngOnDestroy() {
    this.voiceName$.unsubscribe();
  }

}
