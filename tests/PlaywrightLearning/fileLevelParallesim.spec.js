const { test, expect } = require('@playwright/test');

test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes

test('Wait statements', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForSelector('#name');    //wiat till selector is visible
await page.waitForTimeout(2000);        //wait for 2 seconds
await page.waitForLoadState('load');    //wait till page is loaded
await page.locator('#name').fill('John Doe');   //fill the text in input field
await page.waitForLoadState('domcontentloaded') //wait till dom content is loaded
await page.waitForLoadState('networkidle');     //wait till network is idle 
await page.waitForSelector('#submit',{state : 'attached'}); //wait till selector is attached to dom
await page.waitForSelector("#name",{state : 'visible'});    //wait till selector is visible
await page.waitForSelector('#name',{state: 'hidden'});  //wait till selector is hidden
await page.screenshot({path:'screenshot.png'});

});


test('N Element Locator', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForSelector('#name');
await page.locator(".form-group input").first().fill('JohnDhoke'); // select first element from the list of elements
await page.screenshot({path:'screenshot.png'})
await page.locator(".form-group input").nth(1).fill('JohnDhokse'); // select nth element from the list of elements
await page.screenshot({path : 'screenshot.png'}); // take screenshot of the page
await page.goBack(); // go back
await page.goForward(); // go forward
await page.reload(); // refresh the page
await page.waitForTimeout(2000);
await page.screenshot({path:'screenshot.png'});

});

test('Dropdowns',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForSelector('#name');
  //  await page.locator('#country').selectOption('India'); // select option by value
    await page.screenshot({path:'screenshot.png'});
    await page.locator('#country').selectOption({ label: 'Germany' }); // select option by label
 //await page.screenshot({path:'screenshot.png'});
    await page.locator('#country').selectOption({index: 2}); // select option by index
      await page.screenshot({path:'screenshot.png'});

});

test('Validate Attribute and Value', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page.locator('#sunday')).toHaveAttribute('value', 'sunday'); // check if the attribute value is correct
});


test('Element Visibility', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page.locator('#sunday')).toBeVisible(); // check if the element is visible
});

test('Press Sequentially', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator(".form-group input").first().pressSequentially('India'); // check all options auto populate from field
});


test('GetBy Label', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
   await page.getByLabel("Monday").click(); // element is selected by label
  await page.screenshot({path : 'screenshot.png'});
});

test('Tite of all Elements', async ({ page }) => {
     await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.waitForLoadState();
const temp = await page.locator('.products h4').allInnerTexts(); // check all titles/text of the elelment
console.log(temp);

});

test('Drop Downs', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.waitForLoadState();
  await page.locator('#dropdown').selectOption('Option 1'); // select option by value
await page.locator('#dropdown').selectOption({label : "Option 2"}); // select option by label
await page.screenshot({path:'screenshot.png'});
await page.locator('#dropdown').selectOption({index : 1});//select option by index
await page.screenshot({path:'screenshot.png'});
});


test('Check Boxes', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("#checkBoxOption1").check(); // click on checkbox
    await page.locator("#checkBoxOption1").isChecked(); // check if checkbox is checked
    await page.screenshot({path:'screenshot.png'});
    await page.locator("#checkBoxOption1").uncheck(); // uncheck the checkbox
   await expect(page.locator("#checkBoxOption1")).isVisible({timeout: 5000});
    await expect(page.locator("#checkBoxOption1")).not.toBeChecked(); // check if checkbox is not checked
    await expect(page.locator("#checkBoxOption1")).toBeFalsy(); //check if checkbox is not checked
    await page.screenshot({path:'screenshot1.png'});
});

test('Locator has text', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator('div:has-text("donkey")').isvisible; // text should be present in sentence


});


test('Place holder', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
  await page.getByPlaceholder('Enter Your Name').fill('India');//placeholder is a tag
  await page.screenshot({path:'screenshot.png'});


});


test('Get By Role', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    
  await page.getByRole("input",{value: "option1"}).check(); // getbyrole is tagname + attrbute value
  await page.screenshot({path:'screenshot.png'});


});

test('Mouse Hover and override defalt timeout', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#mousehover').isVisible({timeout: 10000});
await page.locator('#mousehover').hover();// hover mouse on element
await page.locator('#mousehover').click();
await page.locator('#mousehover').click({button: 'right'}); // right click on element
page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));// drag and drop element

await page.locator('#mousehover').dblclick({timeout: 10000}); // double click on element
/*
await page.mouse.move(100, 100);
await page.mouse.down();      // Grab the item // press the mouse button

await page.mouse.move(400, 200);

await page.mouse.up();        // Drop the item // release the mouse button
*/

 await page.screenshot({path:'screenshot.png'});
 page.waitForTimeout(2000);
await page.locator('a:has-text("Top")').click();
  await page.screenshot({path:'screenshot.png'});


});






