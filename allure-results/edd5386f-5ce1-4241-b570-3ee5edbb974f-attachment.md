# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\test1.spec.js >> API Testing 1
- Location: tests\apitesting\test1.spec.js:59:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
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
  30 |   const productOrderedId = '6a7c6aac85b8849b494496d2';
  31 |   const orderPayload = {
  32 |     orders: [
  33 |       {
  34 |         country: 'Cuba',
  35 |         productOrderedId
  36 |       }
  37 |     ]
  38 |   };
  39 | 
  40 |   const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
  41 |     data: JSON.stringify(orderPayload),
  42 |     headers: {
  43 |       Authorization: token,
  44 |       'Content-Type': 'application/json',
  45 |       Accept: 'application/json',
  46 |       Origin: 'https://rahulshettyacademy.com',
  47 |       Referer: 'https://rahulshettyacademy.com/client/#/auth/login'
  48 |     }
  49 |   });
  50 |   console.log('order status', orderResponse.status());
  51 |   const orderResponseJson = await orderResponse.json();
  52 |   console.log(orderResponseJson);
> 53 |   expect(orderResponse.ok()).toBeTruthy();
     |                              ^ Error: expect(received).toBeTruthy()
  54 |   orderId = orderResponseJson.orders?.[0] 
  55 |   await apiContext.dispose();
  56 | });
  57 | 
  58 | 
  59 | test('API Testing 1', async ({ page }) => {
  60 |   await page.addInitScript(value => {
  61 |     window.localStorage.setItem('token', value);
  62 |   }, token);
  63 | 
  64 |   await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  65 |   await page.waitForLoadState('networkidle');
  66 |   page.screenshot({ path: 'screenshot.png' });
  67 | });
```