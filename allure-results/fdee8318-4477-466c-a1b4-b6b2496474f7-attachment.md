# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\annonmus.spec.js >> Annonumus functions
- Location: tests\JavaScript\annonmus.spec.js:4:1

# Error details

```
ReferenceError: arr is not defined
```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 | 
  3 | //Annoynmus function exmaple1
  4 | test('Annonumus functions', async ({ page }) => {
> 5 |     arr = [1, 2, 3, 4, 5];
    |        ^ ReferenceError: arr is not defined
  6 |     let temp = arr.filter(s=>s>4);  
  7 |     console.log("temp: " + temp);
  8 | 
  9 | });
```