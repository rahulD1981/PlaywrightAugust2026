# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PlaywrightLearning\dataeriven1.spec.js >> search test for Gift card
- Location: tests\PlaywrightLearning\dataeriven1.spec.js:9:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://demowebshop.tricentis.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | //testdata
  4  | const searchItems=['laptop', 'Gift card', 'smartphone', 'monitor'];
  5  | 
  6  | //using for-of loop
  7  | for(const item of searchItems)
  8  | {
  9  | test(`search test for ${item}`,async ({ page }) => {
  10 |     console.log("Elements in array are " + item)
  11 |     
> 12 |         await page.goto('https://demowebshop.tricentis.com/');
     |                    ^ Error: page.goto: Test ended.
  13 |         await page.locator('#small-searchterms').fill(item);  // fill teh text in search box
  14 |          await page.screenshot({path : 'screenshots/screenshot.png' });
  15 |     
  16 |         });
  17 | }
  18 | 
  19 | //using forEach function
  20 | searchItems.forEach((item)=>{
  21 |     test(`search test for ${item}`,async ({ page }) => {
  22 |             await page.goto('https://demowebshop.tricentis.com/');
  23 |             await page.locator('#small-searchterms').fill(item);  // fill teh text in search box
  24 |                 });
  25 | 
  26 | })
```