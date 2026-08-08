const { test, expect } = require('@playwright/test');
//config file
//in main object define config  +++  reporter : 'html'
//in testresults folder all tests resut will be saved
//genrrating report thru command prompt  npx playwright test tests/PlaywrightLearning/reporterhtml

//list report
//list is all test cases will be displayed

test('Assertions', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('load');
    await page.locator('#name').fill('rahul');
    await page.waitForTimeout(2000);

})