
import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../../../test.config';

let homePage;
let registrationPage;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl); // Navigate to application url
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000)
    await page.close();

})

test('@master @sanity @regression Test Case1', async ({ }) => {

    await homePage.clickMyAccount();
    await homePage.clickRegister();
    //////////////////////

    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);
    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //get confirmation message
    const confirmationMessage = await registrationPage.getConfirmationMsg()
    expect(confirmationMessage).toContain("Your Account Has Been Created!")


})

test('@regression Tags Regression', async ({ }) => {

    await homePage.clickMyAccount();
    await homePage.clickRegister();
    //////////////////////

    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);
    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //get confirmation message
    const confirmationMessage = await registrationPage.getConfirmationMsg()
    expect(confirmationMessage).toContain("Your Account Has Been Created!")


})