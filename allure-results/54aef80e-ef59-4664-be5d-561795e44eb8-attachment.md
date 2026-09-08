# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> test under
- Location: tests\JavaScript\test.spec.js:4:1

# Error details

```
TypeError: Assignment to constant variable.
```

# Test source

```ts
  1  | const { cy, el } = require('@faker-js/faker');
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('test under', async ({ page }) => {
  5  |     //Interview tips
  6  |     //function without name  = //const func = (el) => { }
  7  | 
  8  |     const arrayNumbers = [1, 2, 2, 3, 4, 5, 5, 6, 11]
  9  |     let max = arrayNumbers[0];
> 10 |     for(const i=0; i < arrayNumbers.length; i++){
     |                                              ^ TypeError: Assignment to constant variable.
  11 |         if (arrayNumbers[i] > max) {
  12 |                 max= arrayNumbers[i]
  13 |         }
  14 |     }
  15 |         console.log(max)
  16 | })
  17 |  
```