const { iosCapabilities } = require('./capabilities');
const path = require('path');

exports.config = {
  runner: 'local',
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT) || 4723,
  path: '/',

  specs: ['../test/specs/**/*.spec.js'],
  exclude: ['../test/specs/android/**/*.spec.js'],
  maxInstances: 1,

  capabilities: [iosCapabilities],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 180000,     // iOS is slower to boot
  connectionRetryCount: 3,

  services: [
    ['appium', {
      args: {
        address: '127.0.0.1',
        port: 4723,
        relaxedSecurity: true
      },
      command: 'appium',
      logPath: './reports/appium-logs'
    }]
  ],

  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'reports/allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 180000
  },

  before: async function () {
    const chai = require('chai');
    global.expect = chai.expect;
    global.should = chai.should();
  },

  beforeTest: async function (test) {
    console.log(`\n▶ Running: ${test.title}`);
  },

  afterTest: async function (test, context, { error, result, duration, passed }) {
    if (!passed) {
      const timestamp = Date.now();
      const filePath = path.join('reports/screenshots', `IOS_FAIL_${timestamp}.png`);
      try {
        await browser.saveScreenshot(filePath);
        console.log(`📸 Screenshot saved: ${filePath}`);
      } catch (e) {
        console.error('Failed to capture screenshot:', e.message);
      }
    }

    // Close app between tests for clean state (optional)
    try {
      await driver.terminateApp(process.env.IOS_BUNDLE_ID);
    } catch (e) {
      // ignore
    }
  }
};