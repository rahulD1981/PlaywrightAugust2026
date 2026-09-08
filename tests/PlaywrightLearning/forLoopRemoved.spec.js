const { test, expect } = require('@playwright/test');


//test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes

test('For Loop1 ', async ({ page }) => {
    //Scope finding
    //products = page.locator('.card-body');
    //there are three sub locators presen inside above products path. how to find them drictly
    //products.nth(i).locator(b)  // in b tag type the reuiqred text is present
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.waitForLoadState('networkidle');



    const products = page.locator("div[class='product']");
    console.log(await products.count());
    await page.screenshot({ path: 'screenshot.png' });
    const titles = await page.locator("div[class='product'] h4").allTextContents();
    console.log(titles);

    for (let i = 0; i < await products.count(); i++) {
        const productName = await products.nth(i).locator("h4").textContent();
        console.log(productName);

        if (productName.includes("Tomato")) {
            //await products.nth(i).locator("button").click(); // becuase only 1 button is there this will work
            await products.nth(i).locator("text=Tomato - 1 Kg").click(); // clicking based on text
            await page.screenshot({ path: 'screenshot.png' });
            break;
        }
    }
})

test('For Loop2', async ({ page }) => {
      await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.waitForLoadState('networkidle');



    const products = page.locator("div[class='product']");
    console.log(await products.count());
    await page.screenshot({ path: 'screenshot.png' });
    //const titles = await page.locator("div[class='product'] h4").allTextContents();
    //console.log(titles);
  
    /*
    //Method 1 - Removing for loop and not using filter
    await page.locator("div[class='product']", { hasText: 'Tomato' })
              .getByRole('button', { name: 'ADD TO CART' })
              .click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshot.png' });
*/
    //Method 2 - Removing for loop and using filter
    await page.locator("div[class='product']").filter({ hasText: 'Tomato' })
              .getByRole('button', { name: 'ADD TO CART' })
              .click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'screenshot.png' });
});

