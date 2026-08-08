# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> Under Test
- Location: tests\JavaScript\test.spec.js:5:1

# Error details

```
ReferenceError: face is not defined
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | 
  5  | test('Under Test', async ({ page }) => {
  6  |     let number = 5;
  7  |     let fact = 1;
  8  |     for (let i = 1; i <= number; i++) {
> 9  |         face = fact * number;
     |             ^ ReferenceError: face is not defined
  10 |     }
  11 |     console.log(`Factorial of ${number} is ${fact}`);
  12 | 
  13 | });
  14 | 
  15 | 
```