# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\test1.spec.js >> API Testing 1
- Location: tests\apitesting\test1.spec.js:19:1

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
  8  |    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
  9  |     data:loginPayload
  10 |    })
> 11 |     expect(loginResponse.ok()).toBeTruthy();
     |                                ^ Error: expect(received).toBeTruthy()
  12 |     const loginResponseJson = await loginResponse.json();
  13 |     console.log(loginResponseJson);
  14 |     const token = loginResponseJson.token;
  15 |   
  16 | })
  17 | 
  18 | 
  19 | test('API Testing 1', async ({ page }) => {
  20 |     page.addInitScript(value => {
  21 |     window.localStorage.setItem('token', value);
  22 |     },token);
  23 |     await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
  24 | 
  25 | })
```