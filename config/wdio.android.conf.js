const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723, // Default Appium server port
    specs: ['./tests/specs/**/*.js'],
    capabilities: [{
        // Android capabilities example
        'platformName': 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android_Emulator',
        'appium:app': path.join(process.cwd(), './apps/ph.billeasev2.mobile'), // Local app path
        'appium:autoGrantPermissions': true
    }],
    framework: 'mocha',
    reporters: ['spec'],
    services: [['appium', {
        command: 'appium',
        args: {
            address: 'localhost',
            port: 4723
        }
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};