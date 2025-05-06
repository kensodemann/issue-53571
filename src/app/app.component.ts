import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    StatusBar.setStyle({ style: Style.Default });
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.handleDarkModeChange(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener('change', this.handleDarkModeChange);
  }

  private async handleDarkModeChange(event: { matches: boolean }) {
    if (event.matches) {
      console.log('Dark Mode');
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setBackgroundColor({ color: '#000000' });
    } else {
      console.log('Light Mode');
      await StatusBar.setStyle({ style: Style.Light });
      await StatusBar.setBackgroundColor({ color: '#FFFFFF' });
    }
  }
}
