const { test, expect } = require('@playwright/test');
const context = await browser.newContext();
const page = await context.newPage();


test('Multi Browser', async ({ page }) => {

    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = "a[href='https://rahulshettyacademy.com/documents-request']";
    const [newPage]  = await   Promise.all(
        [
                context.waitforEvent('Page'),
                documentLink.click(),
        ]);
               await newPage.waitforLoadState();
               console.log(newPage.title());
               newPage.close();
    
               //continue on Original page
               await page.reload();


})
