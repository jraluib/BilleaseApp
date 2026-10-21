import { config as shared } from './wdio.shared.conf.js';
import path from 'node:path';

export const config = {
  ...shared,
  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Android Emulator',
      'appium:platformVersion': process.env.ANDROID_PLATFORM_VERSION,
      'appium:app': path.resolve(process.env.ANDROID_APP || './apps/android.wdio.native.app.v2.2.0.apk'),
      'appium:autoGrantPermissions': true,
      'appium:newCommandTimeout': 240,
    },
  ],
};
