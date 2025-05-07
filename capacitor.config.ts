import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'issue-53571',
  webDir: 'www',
  plugins: {
    StatusBar: {
      overlaysWebView: true,
    },
  },
};

export default config;
