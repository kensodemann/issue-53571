import { Component, effect, signal, WritableSignal } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
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

    effect(() => {
      console.log('in effect');
      if (this.isDark()) {
        console.log('Dark Mode');
        EdgeToEdge.setBackgroundColor({ color: '#000000' });
        StatusBar.setStyle({ style: Style.Dark });
      } else {
        console.log('Light Mode');
        EdgeToEdge.setBackgroundColor({ color: '#FFFFFF' });
        StatusBar.setStyle({ style: Style.Light });
      }
    });
  }
}
