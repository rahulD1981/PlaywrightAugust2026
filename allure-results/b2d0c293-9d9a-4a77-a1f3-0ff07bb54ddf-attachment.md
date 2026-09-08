# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\test1.spec.js >> API Testing 1
- Location: tests\apitesting\test1.spec.js:20:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | 
  2  | const { test, expect,request } = require('@playwright/test');
  3  | const loginPayload = {userEmail:"JobsforrahulD@gmail.com",userPassword:"Riyaansh2011*"};
  4  | 
  5  | 
  6  | test.beforeAll(async () => {
  7  |    const apiContext = await request.newContext();
  8  |    //imp note : after u login then whatever url comes in Headers >> Request url paste its
  9  |    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
  10 |     data:loginPayload
  11 |    })
> 12 |     expect(loginResponse.ok()).toBeTruthy();
     |                                ^ Error: expect(received).toBeTruthy()
  13 |     const loginResponseJson = await loginResponse.json();
  14 |     console.log(loginResponseJson);
  15 |     const token = loginResponseJson.token;
  16 |   
  17 | })
  18 | 
  19 | 
  20 | test('API Testing 1', async ({ page }) => {
  21 |     page.addInitScript(value => {
  22 |     window.localStorage.setItem('token', value);
  23 |     },token);
  24 |     await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
  25 | 
  26 | })
```