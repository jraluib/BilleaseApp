import BasePage from './BasePage.js';
import SignUpPage from './SignUpPage.js';
import ForgotPasswordPage from './ForgotPasswordPage.js';

class LoginPage extends BasePage {

 get phoneInputField() { return driver.$('//android.widget.EditText[@resource-id="ph.billease.app:id/phone_input"]'); }
  get nextButton() { return driver.$('//android.widget.Button[@text="Next"]'); }

  get forgotPasswordLink()  { return $('//*[@resource-id="login_link_forgot_password"]'); }

  get loginSegment()  { return $('//*[@resource-id="btn_log_in"]'); }
  get emailInput()    { return $('//*[@resource-id="login_input_email_or_phone"]'); }
  get passwordInput() { return $('//*[@resource-id="login_input_password"]'); }

  get loginButton()   { return $('//*[@resource-id="btn_log_in"]'); }

  // Native alert shown after submit
  get alertTitle()   { return driver.isAndroid ? $('id=android:id/alertTitle') : $('-ios predicate string:type == "XCUIElementTypeStaticText" AND name CONTAINS "Success"'); }
  get alertMessage() { return driver.isAndroid ? $('id=android:id/message')    : $('~You are logged in!'); }
  get alertOk()      { return driver.isAndroid ? $('id=android:id/button1')    : $('~OK'); }

  get emailError()    { return $('//*[contains(@text,"valid email") or contains(@label,"valid email")]'); }
  get passwordError() { return $('//*[contains(@text,"at least 8") or contains(@label,"at least 8")]'); }

  async open() {
   // await TabBar.openLogin();
    await this.waitForVisible(this.loginButton);
  }
 async clickLogin() {
        await this.tap(this.loginSegment);
    }
 async clickForgotPassword() {
        await this.tap(this.forgotPasswordLink);
    }
  async login(email, password) {
    await this.tap(this.loginSegment);
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
    await this.hideKeyboard();
    await this.tap(this.loginButton);
  }

  async dismissAlert() {
    await this.tap(this.alertOk);
  }
}

export default new LoginPage();
