# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\test.spec.js >> test under
- Location: tests\JavaScript\test.spec.js:4:1

# Error details

```
ReferenceError: arr1 is not defined
```

# Test source

```ts
  1  | const { cy, el } = require('@faker-js/faker');
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('test under', async ({ page }) => {
  5  |     //Interview tips
  6  |     //Remember when to use 2 round brackers ((
  7  |     //function without name  = //const func = (el) => { }
  8  |         //for sorting array use sort done use reduce
  9  | //Logic between 2 for loops llll   when 2nd for loop is ended then,If condition is executed
  10 | 
  11 | 
> 12 |         arr1 = [1,2,3,4,5]
     |             ^ ReferenceError: arr1 is not defined
  13 |         const sums = arr1.reduce((a,b)=> a+b)
  14 |         console.log(sums)
  15 |   
  16 | })
  17 |        
```