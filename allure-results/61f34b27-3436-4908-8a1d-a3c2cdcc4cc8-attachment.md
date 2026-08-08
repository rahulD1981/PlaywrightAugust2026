# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> Under Test
- Location: tests\JavaScript\test.spec.js:5:1

# Error details

```
ReferenceError: s is not defined
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | 
  5  | test('Under Test', async ({ page }) => {
  6  | const arr2 = [1,4,5];
> 7  | const oddNum = arr2.filter(s> s%2!==0)
     |                            ^ ReferenceError: s is not defined
  8  | console.log(oddNum);
  9  | });
  10 | 
  11 | 
```