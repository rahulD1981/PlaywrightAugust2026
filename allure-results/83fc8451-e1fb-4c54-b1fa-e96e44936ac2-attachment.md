# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\gettest.spec.js >> API Get Request
- Location: tests\apitesting\gettest.spec.js:3:1

# Error details

```
Error: expect(received).toHaveProperty(path)

Expected path: "bookingid"
Received path: []

Received value: [{"bookingid": 1}, {"bookingid": 2}, {"bookingid": 3}, {"bookingid": 4}, {"bookingid": 5}, {"bookingid": 6}, {"bookingid": 7}, {"bookingid": 8}, {"bookingid": 9}, {"bookingid": 10}, …]
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | 
  3  | test('API Get Request', async () => {
  4  |   const apiContext = await request.newContext();
  5  | 
  6  |   try {
  7  |     const response = await apiContext.get('https://restful-booker.herokuapp.com/booking/');
  8  | 
  9  |     expect(response.status()).toBe(200);
  10 |     expect(response.ok()).toBeTruthy();
  11 |     expect(response.statusText()).toBe('OK');
  12 |     expect(response.headers()['content-type']).toContain('application/json');
  13 |     expect(response.headers()).toHaveProperty('content-length');const responseBody = await response.json();
  14 | 
  15 | 
> 16 |     expect(responseBody).toHaveProperty("bookingid");
     |                          ^ Error: expect(received).toHaveProperty(path)
  17 |     expect(responseBody.length).toBeGreaterThan(0);
  18 | 
  19 | 
  20 | 
  21 | 
  22 |   } finally {
  23 |     await apiContext.dispose();
  24 |   }
  25 | });
```