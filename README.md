Billease Appium Framework Sample
Submitted by: jayson Romel Luib

Notes: Wasn't able to test iOS run due to lack of available macOS machine/simulator, only wrote test cases and page objects.

To run iOS Script, replace the content of `wdio.conf.js` located inside the project root folder with contents from `wdio.ios.conf.js` coming from the `config` folder.

## Structure
- `pages/`: Android Page Object Model (POM) files
- `pages/ios/`: iOS XCUITest Page Object Model (POM) files (`ioswelcome.page.js`, `ioslogin.page.js`, `iosforgotPassword.page.js`, `iossignup.page.js`)
- `tests/`: Test suites (`login.test.js`, `signup.test.js`, `forgotPassword.test.js`)
- `config/`: Appium and WebdriverIO configuration files (`wdio.android.conf.js`, `wdio.ios.conf.js`, `appium.config.js`)
