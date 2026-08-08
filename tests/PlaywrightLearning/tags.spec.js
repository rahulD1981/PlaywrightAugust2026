const { test, expect } = require('@playwright/test');

test('@smoke - Smoke test 1', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
console.log("Smoke test 1 executed successfully");


});

test('@smokesmoke test 2', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForSelector('#name');
console.log("Smoke test 2 executed successfully");

});

test('@sanity @smoke test 3', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForSelector('#name');
console.log("Smoke and Sanity test 2 executed successfully");

});

test('smoke test 4', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForSelector('#name');
console.log("Smoke test 2 executed successfully");
})

test('@smoke -- smoke test 5', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForSelector('#name');
console.log("Smoke test 2 executed successfully");
})

// Execute only smoke related test cases
    // npx playwright test  --grep "@smoke"

//Execute sanity or smoke related test cases
    // npx playwright test  --grep "@sanity|@smoke"

    //Execute sanity and smoke related test cases - dony use any sumbol in the grep expression
    // npx playwright test  --grep "(?=.* @sanity)(?=.*@smoke)" 




