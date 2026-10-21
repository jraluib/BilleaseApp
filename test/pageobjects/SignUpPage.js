import BasePage from './BasePage.js';

/** Bottom navigation, present on every screen of the demo app */
class SignUpPage extends BasePage {
 get signUpButton()   { return $('//*[@resource-id="sign_up"]'); }
  get mobileNumberInput() { return $('//*[@resource-id="sign_up_mobile_text"]'); }
  get emailAddressInput() { return $('//*[@resource-id="sign_up_email_text"]'); }

//
 async clickSignUp() {
        await this.tap(this.signUpButton);
    }
 async signup(mobile, emailAddress) {
    await this.type(this.mobileNumberInput, mobile);
 //   await this.type(this.emailAddressInput, emailAddress);
    await this.hideKeyboard();
    await this.tap(this.signUpButton);
  }
//  async openForms() { await this.tap(this.formsTab); }
}

export default new SignUpPage();
