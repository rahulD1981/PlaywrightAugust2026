# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\test1.spec.js >> API Testing 1
- Location: tests\apitesting\test1.spec.js:58:1

# Error details

```
TypeError: Cannot read properties of undefined (reading '0')
```

# Test source

```ts
  1  | 
  2  | const { test, expect, request } = require('@playwright/test');
  3  | let token;
  4  | let orderId;
  5  | const loginPayload = {
  6  |   userEmail: 'jobsforrahuld@gmail.com',
  7  |   userPassword: 'Riyaansh2011*'
  8  | };
  9  | 
  10 | test.beforeAll(async () => {
  11 |   const apiContext = await request.newContext();
  12 |   // imp note : after u login then whatever url comes in Headers >> Request url paste its
  13 |   const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
  14 |     data: JSON.stringify(loginPayload),
  15 |     headers: {
  16 |       'Content-Type': 'application/json',
  17 |       'Accept': 'application/json',
  18 |       'Origin': 'https://rahulshettyacademy.com',
  19 |       'Referer': 'https://rahulshettyacademy.com/client/#/auth/login'
  20 |     }
  21 |   });
  22 |   console.log('login status', loginResponse.status());
  23 |   const loginResponseJson = await loginResponse.json();
  24 |   console.log(loginResponseJson);
  25 |   expect(loginResponse.ok()).toBeTruthy();
  26 |   token = loginResponseJson.token;
  27 |   expect(token).toBeTruthy();
  28 | 
  29 |   //create order
  30 |   const orderPayload = {
  31 |     "orders": [
  32 |       {
  33 |         "country": "Cuba",
  34 |         "productOrderedId": "6a7c6aac85b8849b494496d2 "
  35 |       }
  36 |     ]
  37 |   };
  38 | 
  39 |   const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
  40 |     data: JSON.stringify(orderPayload),
  41 |     headers: {
  42 |       'Authorization': token,
  43 |       'Content-Type': 'application/json',
  44 |       'Accept': 'application/json',
  45 |       'Origin': 'https://rahulshettyacademy.com',
  46 |       'Referer': 'https://rahulshettyacademy.com/client/#/auth/login'
  47 |     }
  48 |   });
  49 |   console.log('order status', orderResponse.status());
  50 |   const orderResponseJson = await orderResponse.json();
  51 |   console.log(orderResponseJson);
> 52 |   orderId = orderResponseJson.orders[0];
     |                                     ^ TypeError: Cannot read properties of undefined (reading '0')
  53 | 
  54 |   await apiContext.dispose();
  55 | });
  56 | 
  57 | 
  58 | test('API Testing 1', async ({ page }) => {
  59 |   await page.addInitScript(value => {
  60 |     window.localStorage.setItem('token', value);
  61 |   }, token);
  62 | 
  63 |   await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  64 |   await page.waitForLoadState('networkidle');
  65 |   page.screenshot({ path: 'screenshot.png' });
  66 | });
```