const BasePage = require('./base.page');

class ForgotPasswordPage extends BasePage {
    get emailOrPhoneInput() { return driver.$('//android.widget.EditText[@resource-id="ph.billease.app:id/email_or_phone" or @resource-id="ph.billease.app:id/phone_input" or @resource-id="ph.billease.app:id/email"]'); }
    get resetButton() { return driver.$('//android.widget.Button[contains(@text, "Reset") or contains(@text, "Send") or @text="Submit"]'); }
    get successMessageHeader() { return driver.$('//android.widget.TextView[contains(@text, "Instructions") or contains(@text, "Sent") or contains(@text, "Check")]'); }

    async enterContactInfo(contactInfo) {
        await this.emailOrPhoneInput.waitForDisplayed({ timeout: 5000 });
        await this.emailOrPhoneInput.setValue(contactInfo);
    }

    async clickReset() {
        await this.clickElement(this.resetButton);
    }
}

module.exports = new ForgotPasswordPage();
