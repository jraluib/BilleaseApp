const BasePage = require('../base.page');

class IOSForgotPasswordPage extends BasePage {
    get emailOrPhoneInput() { return driver.$('//XCUIElementTypeTextField[@accessible="true"]'); }
    get resetButton() { return driver.$('//XCUIElementTypeButton[contains(@name, "Reset") or contains(@name, "Send") or @name="Submit"]'); }
    get successMessageHeader() { return driver.$('//XCUIElementTypeStaticText[contains(@name, "Instructions") or contains(@name, "Sent") or contains(@name, "Check")]'); }

    async enterContactInfo(contactInfo) {
        await this.emailOrPhoneInput.waitForDisplayed({ timeout: 5000 });
        await this.emailOrPhoneInput.setValue(contactInfo);
    }

    async clickReset() {
        await this.clickElement(this.resetButton);
    }
}

module.exports = new IOSForgotPasswordPage();
