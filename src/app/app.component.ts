import { Component, effect, signal, WritableSignal } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  readonly isDark: WritableSignal<boolean>;

  constructor() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDark = signal(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener('change', (evt: { matches: boolean }) => this.isDark.set(evt.matches));

    SplashScreen.hide();

    effect(async () => {
      if (this.isDark()) {
        await StatusBar.setStyle({ style: Style.Dark });
      } else {
        await StatusBar.setStyle({ style: Style.Light });
      }
      console.log('status bar info', await StatusBar.getInfo());
    });
  }
}
