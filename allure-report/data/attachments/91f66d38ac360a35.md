# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: framework\testcases\AccountRegistration.spec.js >> Test Case1
- Location: tests\framework\testcases\AccountRegistration.spec.js:22:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | 
  2  | import{test,expect} from '@playwright/test'
  3  | import { HomePage } from '../pages/HomePage';
  4  | import { RegistrationPage } from '../pages/RegistrationPage'
  5  | import { RandomDataUtil  } from '../utils/randomDataGenerator'
  6  | import { TestConfig } from '../../../test.config';
  7  | 
  8  | test.beforeEach(async({}) =>{
  9  |     const config  =   new TestConfig();
> 10 |     await page.goto(config.appUrl); // Navigate to applicaiton url
     |     ^ ReferenceError: page is not defined
  11 | 
  12 |     const homePage = new HomePage(page);
  13 |     const registrationPage = new RegistrationPage(page)
  14 | 
  15 | })
  16 | 
  17 | test.afterEach(async({page})=>{
  18 |     await page.close();
  19 | 
  20 | })
  21 | 
  22 | test('Test Case1', async({}) =>{
  23 |     
  24 |     await homePage.clickMyAccount();
  25 |     await homePage.clickRegister();
  26 |     //////////////////////
  27 |     
  28 |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  29 |     await registrationPage.setLastName(RandomDataUtil.getLastName());
  30 |     await registrationPage.setEmail(RandomDataUtil.getEmail());
  31 |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  32 | 
  33 |     const password =  RandomDataUtil.getPassword();
  34 |     await registrationPage.setPassword(password);
  35 |     await registrationPage.setConfirmPassword(password);
  36 |     await registrationPage.setPrivacyPolicy();
  37 |     await registrationPage.clickContinue();
  38 | 
  39 |     //get confirmation message
  40 |      const confirmationMessage  =  await registrationPage.getConfirmationMsg()
  41 |      expect(confirmationMessage).toContain("Your Account Has Been Created!")
  42 |      await page.waitForTimeout(3000)
  43 | 
  44 | })
```