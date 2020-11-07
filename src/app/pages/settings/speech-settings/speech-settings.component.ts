import { Component, OnInit, OnDestroy } from '@angular/core';
import { ASpeech, SpeechConfig } from 'src/app/services/speech.service';
import { Subject, Subscription } from 'rxjs';
import { StorageWrapperService } from 'src/app/services/storage/storage-wrapper.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'speech-settings',
  templateUrl: './speech-settings.component.html',
  styleUrls: ['./speech-settings.component.scss'],
})
export class SpeechSettingsComponent implements OnDestroy {
  private unsubscribe = new Subject();
  private speechConfig: SpeechConfig = <SpeechConfig>{pitch: 0, rate: 0, volume: 0, voiceName: ''};

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

  constructor(private speechService: ASpeech) {
    this.speechService.watchSpeechConfig().pipe(takeUntil(this.unsubscribe)).subscribe((config) => {
        this.speechConfig = config
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
