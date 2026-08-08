# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> Under Test
- Location: tests\JavaScript\test.spec.js:5:1

# Error details

```
ReferenceError: b is not defined
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | 
  5  | test('Under Test', async ({ page }) => {
  6  |   const array = [11, 2, 3, 4, 5, 11, 2, 6];
> 7  |         array.sort((a,b) => a,b);
     |                               ^ ReferenceError: b is not defined
  8  |         console.log("largest no in arra ys " + array[array.length - 1]);
  9  |         console.log("second largest no is" + array[array.length - 2]);
  10 | 
  11 | });
  12 | 
  13 | 
```