# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JavaScript\annonmus.spec.js >> Annonumus functions ex 2
- Location: tests\JavaScript\annonmus.spec.js:14:1

# Error details

```
ReferenceError: temp is not defined
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | //Annoynmus function exmaple1
  4  | test('Annonumus functions', async ({ page }) => {
  5  |     let arr = [1, 2, 3, 4, 5];
  6  |     let temp = arr.filter(s=>s>4);  
  7  |     console.log("temp: " + temp);
  8  | 
  9  | });
  10 | 
  11 | //Annoynmus function exmaple 2
  12 | 
  13 | //Annoynmus function exmaple1
  14 | test('Annonumus functions ex 2', async ({ page }) => {
  15 |     let arr = [1, 2, 3, 4, 5];
  16 |     
  17 |     arr.filter((temp)=>{
  18 |        return temp>4; // Here you have to perform some operation 
  19 |     });
  20 | 
> 21 |     console.log("Greaer than 4 are -- " + temp);
     |                                           ^ ReferenceError: temp is not defined
  22 | 
  23 | });
```