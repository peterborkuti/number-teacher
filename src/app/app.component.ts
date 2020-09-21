import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProbdbService } from './services/core/probdb.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private probdbService: ProbdbService // Ugly hack for loading and initializing StorageService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate =
    [
        {
        title : 'Home',
        url   : '/home',
        icon  : 'home'
        },
      {
        title : 'Database',
        url   : '/show-probdb',
        icon  : 'analytics'
      },
      {
        title : 'Learning',
        url   : '/learn-nums',
        icon  : 'school'
      },
      {
        title : 'Settings',
        url   : '/settings',
        icon  : 'settings'
      },
    ];
  }
}
