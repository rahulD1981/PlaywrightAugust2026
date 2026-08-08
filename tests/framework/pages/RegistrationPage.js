
import { expect } from '@playwright/test';

export class RegistrationPage{

     constructor(page) {
        this.page = page;
        
        // Initialize locators with CSS selectors
        this.txtFirstname = page.locator('#input-firstname');
        this.txtLastname = page.locator('#input-lastname');
        this.txtEmail = page.locator('#input-email');
        this.txtTelephone = page.locator('#input-telephone');
        this.txtPassword = page.locator('#input-password');
        this.txtConfirmPassword = page.locator('#input-confirm');
        this.chkdPolicy = page.locator('input[name="agree"]');
        this.btnContinue = page.locator('input[value="Continue"]');
        this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
    }

    /**
     * Sets the first name in the registration form
     * @param fname - First name to enter
     */
    async setFirstName(fname){
        await this.txtFirstname.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtFirstname.fill(fname);
    }

    /**
     * Sets the last name in the registration form
     * @param lname - Last name to enter
     */
    async setLastName(lname) {
        await this.txtLastname.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtLastname.fill(lname);
    }

    /**
     * Sets the email in the registration form
     * @param email - Email to enter
     */
    async setEmail(email){
        await this.txtEmail.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtEmail.fill(email);
    }

    /**
     * Sets the telephone number in the registration form
     * @param tel - Telephone number to enter
     */
    async setTelephone(tel) {
        await this.txtTelephone.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtTelephone.fill(tel);
    }

    /**
     * Sets the password in the registration form
     * @param pwd - Password to enter
     */
    async setPassword(pwd){
        await this.txtPassword.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtPassword.fill(pwd);
    }

    /**
     * Sets the confirm password in the registration form
     * @param pwd - Password to confirm
     */
    async setConfirmPassword(pwd){
        await this.txtConfirmPassword.waitFor({ state: 'visible', timeout: 10000 });
        await this.txtConfirmPassword.fill(pwd);
    }

    /**
     * Checks the privacy policy checkbox
     */
    async setPrivacyPolicy() {
        await this.chkdPolicy.waitFor({ state: 'visible', timeout: 10000 });
        await this.chkdPolicy.check();
    }

    /**
     * Clicks the Continue button
     */
    async clickContinue(){
        await this.btnContinue.waitFor({ state: 'visible', timeout: 10000 });
        await this.btnContinue.click();
    }

    /**
     * Gets the confirmation message text
     * @returns Promise<string> - Confirmation message text
     */
    async getConfirmationMsg() {
        return await this.msgConfirmation.textContent() ?? '';
    }

    static getPassword(){
        return faker.internet.password();
     }

    /**
     * Complete registration workflow
     * @param userData - Object containing registration data
     */
    async completeRegistration(userData) {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setTelephone(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.setPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msgConfirmation).toBeVisible();
    }
    
}