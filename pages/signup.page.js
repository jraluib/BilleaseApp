// pages/SignUpPage.js
class SignUpPage {
    constructor(driver) {
        this.driver = driver;
    }

    // Define locators (Adjust XPaths/IDs according to BillEase app source tree)
    get startSignUpButton() { return this.driver.$('//*[@text="Sign Up" or @content-desc="Sign Up"]'); }
    get mobileNumberInput() { return this.driver.$('//android.widget.EditText[@resource-id="ph.billease.app:id/mobile_number"]'); }
    get emailAddressInput() { return this.driver.$('//android.widget.EditText[@resource-id="ph.billease.app:id/email"]'); }
    get passwordInput() { return this.driver.$('//android.widget.EditText[@resource-id="ph.billease.app:id/password"]'); }
    get privacyCheckbox() { return this.driver.$('//android.widget.CheckBox[@resource-id="ph.billease.app:id/agree_terms"]'); }
    get nextButton() { return this.driver.$('//android.widget.Button[@text="Continue"]'); }

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

module.exports = SignUpPage;