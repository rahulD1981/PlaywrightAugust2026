import { test, expect } from '@playwright/test' 

test("Add Items to Cart",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState('networkidle');
   await  page.locator("#user-name").fill('standard_user');
   await  page.locator("#password").fill("secret_sauce");
   await  page.locator(".submit-button.btn_action").click();
  
 await page.waitForLoadState('networkidle');
    await expect(page.locator("a.shopping_cart_link")).toBeVisible();

    page.locator(".inventory_item")
                                .filter({ hasText: 'Sauce Labs Backpack' })
                                    .getByRole('button', { name: 'Add to cart' })
                                        .click();
    await page.waitForTimeout(2000)
await page.screenshot({path:'screenshot.png'});

    

    

})