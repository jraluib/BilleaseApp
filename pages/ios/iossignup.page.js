const BasePage = require('../base.page');

class IOSSignUpPage {
    constructor(driver) {
        this.driver = driver;
    }

    // iOS XCUITest selectors for Sign Up
    get startSignUpButton() { return this.driver.$('//XCUIElementTypeButton[@name="Sign Up" or @label="Sign Up"]'); }
    get mobileNumberInput() { return this.driver.$('//XCUIElementTypeTextField[@name="mobile_number" or @accessible="true"]'); }
    get emailAddressInput() { return this.driver.$('//XCUIElementTypeTextField[@name="email" or @accessible="true"]'); }
    get passwordInput() { return this.driver.$('//XCUIElementTypeSecureTextField[@name="password" or @accessible="true"]'); }
    get privacyCheckbox() { return this.driver.$('//XCUIElementTypeButton[@name="agree_terms" or @label="Terms"]'); }
    get nextButton() { return this.driver.$('//XCUIElementTypeButton[@name="Continue" or @label="Continue"]'); }

    // Actions
    async clickSignUp() {
        await this.startSignUpButton.waitForDisplayed({ timeout: 10000 });
        await this.startSignUpButton.click();
    }

    async fillRegistrationForm(mobile, email, password) {
        await this.mobileNumberInput.setValue(mobile);
        await this.emailAddressInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.privacyCheckbox.click();
    }

    async submitForm() {
        await this.nextButton.click();
    }
}

module.exports = IOSSignUpPage;
