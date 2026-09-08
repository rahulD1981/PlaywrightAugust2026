# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PlaywrightLearning\forLoopRemoved.spec.js >> For Loop Removed
- Location: tests\PlaywrightLearning\forLoopRemoved.spec.js:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/seleniumPractise/#/", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | 
  4  | //test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes
  5  | 
  6  | test('For Loop Removed', async ({ page }) => {
  7  |     //Scope finding
  8  |         //products = page.locator('.card-body');
  9  |             //there are three sub locators presen inside above products path. how to find them drictly
  10 |             //products.nth(i).locator(b)  // in b tag type the reuiqred text is present
> 11 |             await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
     |                        ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12 |             await page.waitForTimeout(4000);
  13 |             await page.waitForLoadState('networkidle');
  14 |             
  15 |        
  16 |             
  17 |             const products = page.locator("div[class='product']");
  18 |             console.log(await products.count());
  19 |             await page.screenshot({ path: 'screenshot.png' });
  20 |             const  titles = await page.locator("div[class='product'] h4").allTextContents();
  21 |             console.log(titles);
  22 |            
  23 |              
  24 | 
  25 | 
  26 | })
```