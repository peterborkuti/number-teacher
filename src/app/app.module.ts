import { NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ASpeech, speechServiceFactory } from './services/speech.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { StorageWrapperService } from './services/storage/storage-wrapper.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ASpeech, useFactory: speechServiceFactory, deps: [[StorageWrapperService], [new Optional(), TextToSpeech]] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
