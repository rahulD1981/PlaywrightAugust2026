
const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('./utils/APiUtils');
const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
 
 
let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   response =  await apiUtils.createOrder(orderPayLoad);
 
})
 
 
//create order is success
test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client");
 await page.locator("button[routerlink*='myorders']").click();
 await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
 
 
for(let i =0; i<await rows.count(); ++i)
{
   const rowOrderId =await rows.nth(i).locator("th").textContent();
   if (response.orderId.includes(rowOrderId))
   {
       await rows.nth(i).locator("button").first().click();
       break;
   }
}
const orderIdDetails =await page.locator(".col-text").textContent();
//await page.pause();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 
//Verify if order created is showing in history page
// Precondition - create order -
Completed
Play
55. understanding the importance of API integration calls for Web tests
11min
Completed
Play
56. Playwright request method to make API calls and grab response - Example
15min
Completed
Play
57. Parsing API response & passing token to browser local storage with Playwright
10min
Completed
Play
58. Place order API to create order and bypass the flow in UI with mix of web/API
9min
Completed
Play
59. End to end validation with mix of API & Web concepts - Reduce test time
14min
Completed
Start
60. Important Prerequisite before going through next 2 videos
1min
Completed
Play
61. Refactor API calls from utils folder and isolate from Web test logic
15min
Completed
Play
62. Part 2 - Refactor API calls from utils folder and isolate from Web test logic
9min
Completed
Start
63. Code download for APIUtils file
1min
Completed
Start
64. Code download for WebAPIPart1 file
1min

information alert
Schedule learning time