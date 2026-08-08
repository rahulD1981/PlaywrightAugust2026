import { test, expect } from '@playwright/test';

//testdata
const searchItems=['laptop', 'Gift card', 'smartphone', 'monitor'];

//using for-of loop
for(const item of searchItems)
{
test.skip(`search test for ${item}`,async ({ page }) => {
    console.log("Elements in array are " + item)
    
        await page.goto('https://demowebshop.tricentis.com/');
        await page.locator('#small-searchterms').fill(item);  // fill teh text in search box
         await page.screenshot({path : 'screenshots/screenshot.png' });
    
        });
}

//using forEach function
searchItems.forEach((item)=>{
    test.only(`search test for array2 ${item}`,async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/');
            await page.locator('#small-searchterms').fill(item);  // fill teh text in search box
                });

})