import BasePage from './BasePage.js';
class ForgotPasswordPage extends BasePage {
   get forgotPasswordLink()  { return $('//*[@resource-id="login_link_forgot_password"]'); }
    get resetButton()   { return $('//*[@resource-id="btn_reset"]'); }
     get contactInput() { return $('//*[@resource-id="text_field_contact_to_reset"]'); }

    async enterContactInfo(contactInfo) {
        await this.contactInput.waitForDisplayed({ timeout: 5000 });
        await this.contactInput.setValue(contactInfo);
    }

    async clickReset() {
        await this.tap(this.resetButton);
    }
}


export default new ForgotPasswordPage();