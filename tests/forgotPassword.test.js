const WelcomePage = require('../pages/welcome.page');
const LoginPage = require('../pages/login.page');
const ForgotPasswordPage = require('../pages/forgotPassword.page');

describe('BillEase Forgot Password Flow Tests', () => {
    it('should navigate to forgot password screen and submit password reset request', async () => {
        await WelcomePage.clickLogin();
        await LoginPage.clickForgotPassword();
        await ForgotPasswordPage.enterContactInfo('9171234567');
        await ForgotPasswordPage.clickReset();
        await expect(ForgotPasswordPage.successMessageHeader).toBeDisplayed();
    });
});
