import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService
  ) {
    // // Use matchMedia to check the user preference
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // toggleDarkTheme(prefersDark.matches);

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));


    this.themeService.darkThemeEnable.subscribe(res => {
      if (res) {
        toggleDarkTheme(true);
      } else {
        toggleDarkTheme(false);
      }
    });
    // Add or remove the "dark" class based on if the media query matches
    function toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
