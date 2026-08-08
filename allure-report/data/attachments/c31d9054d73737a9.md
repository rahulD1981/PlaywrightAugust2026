# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> Find Prime Number
- Location: tests\JavaScript\test.spec.js:3:1

# Error details

```
TypeError: revarr is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Find Prime Number', async ({ page }) => {
  4  | 
  5  |     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  6  |     let revarr;
  7  | 
  8  |   for (let i = arr.length - 1; i>=0; i--) {
> 9  |     revarr = revarr(arr[i]);
     |              ^ TypeError: revarr is not a function
  10 | 
  11 | }
  12 | console.log(revarr);
  13 | 
  14 |    
  15 | 
  16 | });
```