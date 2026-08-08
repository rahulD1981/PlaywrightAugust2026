# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\IQ.spec.js >> Find Duplicates in an array
- Location: tests\JavaScript\IQ.spec.js:6:1

# Error details

```
ReferenceError: cy is not defined
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes
  5  | 
  6  | test('Find Duplicates in an array', async ({ page }) => {
  7  |       const arrayNumbers = [1,2,2,3,4,5,5,6]
  8  | const duplicates = arrayNumbers.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
> 9  | cy.log(duplicates);
     |  ^ ReferenceError: cy is not defined
  10 | 
  11 | });
```