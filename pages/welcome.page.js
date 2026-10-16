const BasePage = require('./base.page');

class WelcomePage extends BasePage {
    get loginButton() { return driver.$('//android.widget.Button[@text="Log In"]'); }
    get signUpButton() { return driver.$('//android.widget.Button[@text="Sign Up"]'); }

    async clickLogin() {
        await this.clickElement(this.loginButton);
    }
}
module.exports = new WelcomePage();
