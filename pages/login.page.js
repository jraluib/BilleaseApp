const BasePage = require('./base.page');

class LoginPage extends BasePage {
    get phoneInputField() { return driver.$('//android.widget.EditText[@resource-id="ph.billease.app:id/phone_input"]'); }
    get nextButton() { return driver.$('//android.widget.Button[@text="Next"]'); }
    get otpHeader() { return driver.$('//android.widget.TextView[contains(@text, "OTP") or contains(@text, "Verification")]'); }
    get forgotPasswordLink() { return driver.$('//android.widget.TextView[contains(@text, "Forgot") or contains(@text, "forgot")]'); }

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
module.exports = new LoginPage();
