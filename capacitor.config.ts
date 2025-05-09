import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'issue-53571',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resizeOnFullScreen: false,
    },
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;
