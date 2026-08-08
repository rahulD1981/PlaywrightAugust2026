# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> Find Prime Number
- Location: tests\JavaScript\test.spec.js:3:1

# Error details

```
ReferenceError: cosole is not defined
```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 | 
  3 | test('Find Prime Number', async ({ page }) => {
  4 | const arr2 = [1,2,3,44,5,66]
  5 |     arr2.reduce((a,b)=> a+b)
> 6 |     cosole.log("Sum of array is " + arr2);
    |     ^ ReferenceError: cosole is not defined
  7 | });
```