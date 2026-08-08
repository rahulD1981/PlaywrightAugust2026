const { test, expect } = require('@playwright/test');

test('Drop Down selection without select tag', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/autocomplete");
    await page.waitForLoadState('load');
   await page.getByPlaceholder('Country name').fill('R');
   await page.waitForTimeout(2000);
   //await expect(page.getByPlaceholder('Country name')).toHaveValue('In');
   await page.screenshot({path:'screenshot.png'});
   const totalValues = await page.locator('#countryautocomplete-list div').count();
   console.log(`Total values found: ${totalValues}`);
   for(let i=0;i<totalValues;i++){
   const  text =  await page.locator('#countryautocomplete-list div').nth(i).textContent();

  
    console.log(`Value found: ${text}`);
    if(text.trim() === 'Russia'){
        await page.locator('#countryautocomplete-list div').nth(i).click();
        await page.screenshot({path: 'russia_selected.png'});
        break;
    }
}
   

})


