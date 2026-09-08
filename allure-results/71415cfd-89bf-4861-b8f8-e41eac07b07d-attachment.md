# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\test1.spec.js >> API Testing 1
- Location: tests\apitesting\test1.spec.js:80:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: undefined
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
  29 |   // fetch a valid product id from live products
  30 |   const productListResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/product/get-all-products', {
  31 |     data: JSON.stringify({
  32 |       productName: '',
  33 |       minPrice: null,
  34 |       maxPrice: null,
  35 |       productCategory: [],
  36 |       productSubCategory: [],
  37 |       productFor: []
  38 |     }),
  39 |     headers: {
  40 |       'Content-Type': 'application/json',
  41 |       Accept: 'application/json',
  42 |       Origin: 'https://rahulshettyacademy.com',
  43 |       Referer: 'https://rahulshettyacademy.com/client/#/auth/login'
  44 |     }
  45 |   });
  46 |   const productListJson = await productListResponse.json();
  47 |   console.log('product list status', productListResponse.status());
  48 |   console.log(productListJson);
  49 |   const productOrderedId = productListJson.data?.[0]?._id;
> 50 |   expect(productOrderedId).toBeTruthy();
     |                            ^ Error: expect(received).toBeTruthy()
  51 | 
  52 |   const orderPayload = {
  53 |     orders: [
  54 |       {
  55 |         country: 'Cuba',
  56 |         productOrderedId
  57 |       }
  58 |     ]
  59 |   };
  60 | 
  61 |   const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
  62 |     data: JSON.stringify(orderPayload),
  63 |     headers: {
  64 |       Authorization: token,
  65 |       'Content-Type': 'application/json',
  66 |       Accept: 'application/json',
  67 |       Origin: 'https://rahulshettyacademy.com',
  68 |       Referer: 'https://rahulshettyacademy.com/client/#/auth/login'
  69 |     }
  70 |   });
  71 |   console.log('order status', orderResponse.status());
  72 |   const orderResponseJson = await orderResponse.json();
  73 |   console.log(orderResponseJson);
  74 |   expect(orderResponse.ok()).toBeTruthy();
  75 |   orderId = orderResponseJson.orders?.[0];
  76 |   await apiContext.dispose();
  77 | });
  78 | 
  79 | 
  80 | test('API Testing 1', async ({ page }) => {
  81 |   await page.addInitScript(value => {
  82 |     window.localStorage.setItem('token', value);
  83 |   }, token);
  84 | 
  85 |   await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  86 |   await page.waitForLoadState('networkidle');
  87 |   page.screenshot({ path: 'screenshot.png' });
  88 | });
```