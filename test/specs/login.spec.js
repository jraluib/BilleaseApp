import { readFileSync } from 'node:fs';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/LoginPage.js';
import SignUpPage from '../pageobjects/SignUpPage.js';
import ForgotPasswordPage from '../pageobjects/ForgotPasswordPage.js';

const users = JSON.parse(readFileSync(new URL('../data/users.json', import.meta.url)));

describe('Billease', () => {
  beforeEach(async () => {
    await driver.activateApp(driver.isAndroid ? 'ph.billeasev2.mobile' : 'org.reactjs.native.example.wdiodemoapp');

  });

  it(' login shows an error for an invalid mobile\email @regression', async () => {
        await LoginPage.login(users.badEmail.email, users.badEmail.password);
        await driver.terminateApp(driver.isAndroid ? 'ph.billeasev2.mobile' : 'org.reactjs.native.example.wdiodemoapp');
  });

 it('shows an error for signup @regression', async () => {
        await SignUpPage.clickSignUp();
        await SignUpPage.signup(users.badMobile.mobile, users.badMobile.email);
         await driver.terminateApp(driver.isAndroid ? 'ph.billeasev2.mobile' : 'org.reactjs.native.example.wdiodemoapp');
 });

   it('shows an error for forgot password', async () => {
          await LoginPage.clickLogin();
          await LoginPage.clickForgotPassword();
          await ForgotPasswordPage.enterContactInfo(users.badEmail.email);
          await ForgotPasswordPage.clickReset();
          await driver.terminateApp(driver.isAndroid ? 'ph.billeasev2.mobile' : 'org.reactjs.native.example.wdiodemoapp');
   });
});
