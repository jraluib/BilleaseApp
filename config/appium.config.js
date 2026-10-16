module.exports = {
    options: {
        hostname: '127.0.0.1',
        port: 4723,
        logLevel: 'error',
        capabilities: {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Android Emulator',
            'appium:appPackage': 'ph.billease.app',
            'appium:appActivity': 'com.billease.app.MainActivity',
            'appium:newCommandTimeout': 3600
        }
    }
};
