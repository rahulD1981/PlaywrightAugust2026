# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> Find Duplicates in an array
- Location: tests\JavaScript\test.spec.js:5:1

# Error details

```
TypeError: arr.index is not a function
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | 
  5  | test('Find Duplicates in an array', async ({ page }) => {
  6  | const arrs = [22,44,33,1,23]
> 7  | const duparr  =  arrs.filter((ele, index,arr)=>arr.index(ele)!==index);
     |                                                    ^ TypeError: arr.index is not a function
  8  | console.log(duparr)
  9  | });
  10 | 
  11 | 
```