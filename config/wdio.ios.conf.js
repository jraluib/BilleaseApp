import { config as shared } from './wdio.shared.conf.js';
import path from 'node:path';

export const config = {
  ...shared,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': process.env.IOS_DEVICE_NAME || 'iPhone 15',
      'appium:platformVersion': process.env.IOS_PLATFORM_VERSION,
      'appium:app': path.resolve(process.env.IOS_APP || './apps/ios.app.zip'),
      'appium:autoAcceptAlerts': true,
      'appium:newCommandTimeout': 240,
    },
  ],
};
