
const { test, expect } = require('@playwright/test');

test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes
//Alert imp stuff  First delcare all things which we want to perform on alert dialgoue
//once code done then click on alert

test('Alert Method 1', async ({ page }) => {
page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on('dialog', (dialog) => {
        console.log("Dialoge type is ", dialog.type())
        expect(dialog.type()).toContain('alert')
        console.log("text on the dialogue is ", dialog.message());
        expect(dialog.message()).toContain("Hello , share this practice page and share your knowledge")
        dialog.accept();
    });
    await page.locator("fieldset>[value='Alert']").click();
    await page.screenshot({path : 'screenshots/screenshot.png' });

});

test('Alert Method 2 Accept', async ({ page }) => {
page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on('dialog', (dialog) => {
        
        dialog.accept();
    });
    await page.locator("fieldset>[value='Alert']").click();
    await page.waitForTimeout  (2000)
    await page.screenshot({path : 'screenshots/screenshot.png' });

});

test('Alert Method 3 Cancel', async ({ page }) => {
page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on('dialog', (dialog) => {
        
        dialog.dismiss()
    });
    await page.locator("fieldset>[value='Alert']").click();
    await page.waitForTimeout  (2000)
    await page.screenshot({path : 'screenshots/screenshot.png' });

});

test('Alert Method 3 shortcut', async ({ page }) => {
page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  page.on('dialog',(dialog  => dialog.dismiss))
    await page.locator("fieldset>[value='Alert']").click();
    await page.waitForTimeout  (2000)
    await page.screenshot({path : 'screenshots/screenshot.png' });

});


