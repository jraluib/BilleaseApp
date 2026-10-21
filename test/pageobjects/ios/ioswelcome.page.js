const BasePage = require('../base.page');

class IOSWelcomePage extends BasePage {
    get loginButton() { return driver.$('//XCUIElementTypeButton[@name="Log In" or @label="Log In"]'); }
    get signUpButton() { return driver.$('//XCUIElementTypeButton[@name="Sign Up" or @label="Sign Up"]'); }

    async clickLogin() {
        await this.clickElement(this.loginButton);
    }

    async clickSignUp() {
        await this.clickElement(this.signUpButton);
    }
}
module.exports = new IOSWelcomePage();
