import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';

export const config = {
  runner: 'local',
  specs: ['../test/specs/**/*.spec.js'],
  maxInstances: 1,

  // Appium server is started/stopped automatically
  services: [
    [
      'appium',
      {
        command: 'appium',
        args: {
          address: process.env.APPIUM_HOST || '127.0.0.1',
          port: Number(process.env.APPIUM_PORT) || 4723,
          relaxedSecurity: true,
        },
        logPath: './',
      },
    ],
  ],
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: Number(process.env.APPIUM_PORT) || 4723,
  path: '/',

  logLevel: 'info',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,

  framework: 'mocha',
  mochaOpts: { ui: 'bdd', timeout: 120000 },

  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }],
  ],

  // ---- Hooks ----
  beforeTest: async function (test) {
    console.log(`▶ ${test.parent} :: ${test.title}`);
  },

  // Screenshot on failure, attached to the Allure report
  afterTest: async function (test, context, { passed }) {
    if (passed) return;
    const dir = path.resolve('screenshots');
    fs.mkdirSync(dir, { recursive: true });
    const name = `${test.title.replace(/\W+/g, '_')}_${Date.now()}.png`;
    await driver.saveScreenshot(path.join(dir, name));
    const { default: allure } = await import('@wdio/allure-reporter');
    allure.addAttachment('Failure screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), 'image/png');
  },
};
