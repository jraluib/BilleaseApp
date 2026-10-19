// signup.test.js
const { remote } = require('webdriverio');
const SignUpPage = require('./pages/SignUpPage');

// Appium Session Configurations
const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:appPackage': 'ph.billease.app',           // BillEase App Package ID
    'appium:appActivity': '.ui.splash.SplashActivity', // Initial launch activity
    'appium:noReset': false,                           // Clean slate state
    'appium:ensureWebviewsHavePages': true
};

const wdOpts = {
    hostname: 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities,
};

async function runSignUpTest() {
    const driver = await remote(wdOpts);
    const signUpPage = new SignUpPage(driver);

    try {
        console.log('--- Launching BillEase App ---');

        // Step 1: Click standard layout Sign Up Entry Point
        await signUpPage.clickSignUp();

        // Step 2: Feed simulated test data non real ones as per instruction
        console.log('--- Entering Sign Up Details ---');
        await signUpPage.fillRegistrationForm(
            '9171234567',
            'qa_test_user@example.com',
            'SecurePass123!'
        );

        // Step 3: Trigger submission
        await signUpPage.submitForm();
        console.log('--- Registration submitted, waiting for OTP/Verification step ---');

        // Note: Real world setups require mock API/Staging overrides for handling verification SMS tokens

    } catch (error) {
        console.error('Test Execution Failed:', error);
    } finally {
        // Step 4: Teardown environment
        await driver.deleteSession();
    }
}

runSignUpTest();
