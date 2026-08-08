const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('load');
    await page.locator('#name').fill('rahul');
    await page.waitForTimeout(2000);
    expect(await page.locator('#name').isEnabled()).toBe(true);

    await expect(page.locator('#name')).toHaveValue('rahul');
    //await expect(page.locator('#name')).toHaveText('rahul'); // not supported for input field
    await expect(page.locator('#name')).toBeVisible();
  
//await expect(page.locator('#checkbox')).toBeChecked();

///************************Browser Assertion */
  await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
  await expect(page).toHaveTitle('Practice Page'); 
 })

 test('ToHaveCount Assertion', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator(".form-group input").first().pressSequentially('India');
   await expect(page.locator(".form-group input")).toHaveCount(12);

});
 test('ToCotain', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator(".form-group input").first().pressSequentially('India');
   await expect(page.locator(".form-group input")).toContainText('India');
});

 test('ToCotain1', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator(".form-group input").first().pressSequentially('India');
   await expect(page.locator(".form-group input")).toContainText('India');
});

