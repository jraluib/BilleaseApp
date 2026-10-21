const BasePage = require('../base.page');

class IOSLoginPage extends BasePage {
    get phoneInputField() { return driver.$('//XCUIElementTypeTextField[@name="phone_input" or @accessible="true"]'); }
    get nextButton() { return driver.$('//XCUIElementTypeButton[@name="Next" or @label="Next"]'); }
    get otpHeader() { return driver.$('//XCUIElementTypeStaticText[contains(@name, "OTP") or contains(@label, "Verification")]'); }
    get forgotPasswordLink() { return driver.$('//XCUIElementTypeButton[contains(@name, "Forgot") or contains(@label, "Forgot")]'); }

    async enterPhoneNumber(phoneNumber) {
        await this.phoneInputField.waitForDisplayed({ timeout: 5000 });
        await this.phoneInputField.setValue(phoneNumber);
    }

    async clickNext() {
        await this.clickElement(this.nextButton);
    }

    async clickForgotPassword() {
        await this.clickElement(this.forgotPasswordLink);
    }
}
module.exports = new IOSLoginPage();
