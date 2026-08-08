const { test, expect } = require('@playwright/test');

test('Wait statements', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForSelector('#name');
await page.waitForTimeout(2000);
await page.waitForLoadState('load');
await page.locator('#name').fill('John Doe');
await page.waitForLoadState('domcontentloaded')
await page.waitForLoadState('networkidle');
await page.waitForSelector('#submit',{state : 'attached'});
await page.waitForSelector("#name",{state : 'visible'});
await page.waitForSelector('#name',{state: 'hidden'});
await page.screenshot({path:'screenshot.png'});

});



//https://testautomationpractice.blogspot.com/p/playwrightpractice.html

