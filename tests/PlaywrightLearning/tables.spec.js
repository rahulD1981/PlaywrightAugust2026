const { test, expect } = require('@playwright/test');


//test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes

test('Table functionality Automation', async ({ page }) => {
await page.goto('https://demoqa.com/webtables');

//Total No of row count in the table
const RowSize = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr').count();
console.log("Row Size is : " + RowSize);

//Count total number of cells in the table
const columnSize = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr td').count();
console.log("Column Size is : " + columnSize);

//get all data from columns, Entire column data wil be saved in  variable 
const retreiveColumnData = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr td:nth-child(2)').allTextContents();
console.log("Column Data is : " + retreiveColumnData);
});



test('Table Find name and then age of that person', async ({ page }) => {

await page.goto('https://demoqa.com/webtables');

//note below syntax selects entire row, this entire row is saved as a locator with some xpath or css value
    // this will be used later to find age s
const rowPath  =  await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr');//selects entire row
const RowSize = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr').count();
console.log("Row path is : " + rowPath);
console.log("Row Size is : " + RowSize);

const columData = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr td:nth-child(2)');

for (let i = 0; i < RowSize; i++) {

const columnText =  await columData.nth(i).textContent();
console.log("Column Data is : " + columnText);
if(columnText === 'Gentry') {
//From above entire row path which is taken. then nth logic and column number is taken. based on rowpath.nth(i) it navigates to that row
const ageText = await rowPath.nth(i).locator('td:nth-child(3)').textContent();
console.log("Age of Gentry is : " + ageText); 
}

}
});

test('Multi Browser', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = "a[href='https://rahulshettyacademy.com/documents-request']";
    
   
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click(documentLink),
        await page.waitForTimeout(2000),
         await page.screenshot({path:'screenshot.png'})
    ]);

    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await newPage.close();

    // continue on original page
    await page.reload();
    await page.waitForTimeout(2000);
    await context.close();
})
