
const { test, expect } = require('@playwright/test');

test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes

test('Filter using has text logic', async ({ page }) => {
await page.goto('https://demoqa.com/webtables');
await page.waitForLoadState('domcontentloaded');
//: Filter is used when child objects are present
// Logic : First find all the child elements using css or xpath
//then apply filter logic either using has text or someting else
    //using has text logic
await page.locator("div[class = 'element-list accordion-collapse collapse show'] ul li").filter({hasText:'Buttons'}).click()
await page.waitForTimeout(2000)
await page.screenshot({path:'screenshot.png'});
});

test('Filter using has text logic11', async ({ page }) => {
await page.goto('https://demoqa.com/webtables');
await page.waitForLoadState('domcontentloaded');
//: Filter is used when child objects are present
// Logic : First find all the child elements using css or xpath
//then apply filter logic either using has text or someting else
    //using has text logic
await page.locator("div[class = 'element-list accordion-collapse collapse show'] ul li").filter({hasText:'Buttons'}).click()
await page.waitForTimeout(2000)
await page.screenshot({path:'screenshot.png'});
});



test('Filter using Locator Logic getbyvalues', async ({ page }) => {
await page.goto('https://demoqa.com/webtables');
await page.waitForLoadState('domcontentloaded');
//: Filter is used when child objects are present
// Logic : First find all the child elements using css or xpath
//then apply filter logic 
//every link will definitely have some text, or placeholder or some attribute. use playwright selector to automate it
await page.locator("div[class = 'element-list accordion-collapse collapse show'] ul li")
                    .filter({ has: page.getByText('Radio Button') })
                    .first()
                    .click();
// .filter({ has: page.locator("li[id='item-2']") }).first().click();
await page.waitForTimeout(2000)
await page.screenshot({path:'screenshot.png'});
});

