const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './tests/**/*.test.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Oppo Reno10 5G',
        'appium:udid': 'UKT4SSRG7TCQLFA6',
        'appium:appPackage': 'ph.billease.app',
        'appium:app': path.join(process.cwd(), './apps/ph.billeasev2.mobile'),
        'appium:appActivity': 'com.billease.app.MainActivity',
        'appium:newCommandTimeout': 3600,
        'appium:noReset': false
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services:['appium'],
//    services: [ ['appium', {
//                           command: 'appium'
//                       }]],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function (capabilities, specs) {
        global.driver = browser;
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};
