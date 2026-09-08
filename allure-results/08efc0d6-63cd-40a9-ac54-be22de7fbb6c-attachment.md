# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\gettest.spec.js >> API Get Request
- Location: tests\apitesting\gettest.spec.js:13:1

# Error details

```
TypeError: request.get is not a function
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | const { APIUtils } = require('../framework/utils/class APIUtils');
  3  | 
  4  | const loginPayload = {
  5  | userEmail: 'jobsforrahuld@gmail.com',
  6  |   userPassword: 'Riyaansh2011*'
  7  | };
  8  | 
  9  | test.beforeAll(async () => {
  10 | 
  11 | })
  12 | 
  13 | test('API Get Request', async ({ page }) => {
> 14 |     const response  = await request.get("https://restful-booker.herokuapp.com/booking/")
     |                                     ^ TypeError: request.get is not a function
  15 |     expect(response.status()).toBe(200);
  16 | expect(response.ok()).toBeTruthy();
  17 | expect(response.statusText()).toBe("OK");
  18 | expect(response.headers()['content-type']).toBe("application/json; charset=utf-8");
  19 | expect(response.headers()).toHaveProperty("content-length");
  20 | 
  21 | 
  22 | })
```