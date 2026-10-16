const WelcomePage = require('../pages/welcome.page');
const LoginPage = require('../pages/login.page');

describe('BillEase Login Flow Sanity Tests', () => {
    it('should navigate to OTP verification screen after entering phone number', async () => {
        await WelcomePage.clickLogin();
        await LoginPage.enterPhoneNumber('9171234567');
        await LoginPage.clickNext();
        await expect(LoginPage.otpHeader).toBeDisplayed();
    });
});
