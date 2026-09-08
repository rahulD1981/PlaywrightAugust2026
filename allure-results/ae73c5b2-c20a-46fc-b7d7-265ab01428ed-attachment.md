# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PlaywrightLearning\forLoopRemoved.spec.js >> For Loop Removed
- Location: tests\PlaywrightLearning\forLoopRemoved.spec.js:6:1

# Error details

```
TypeError: page.waitFortimeout is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e5]:
        - generic: Ecom
        - generic [ref=e9]:
          - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
            - /url: emailto:dummywebsite@rahulshettyacademy.com
            - generic [ref=e12]: 
            - text: dummywebsite@rahulshettyacademy.com
          - generic [ref=e13]:
            - link "" [ref=e14] [cursor=pointer]:
              - /url: "#"
            - link "" [ref=e16] [cursor=pointer]:
              - /url: "#"
            - link "" [ref=e18] [cursor=pointer]:
              - /url: "#"
            - link "" [ref=e20] [cursor=pointer]:
              - /url: "#"
    - generic [ref=e22]:
      - generic [ref=e23]:
        - heading "We Make Your Shopping Simple" [level=3]
        - heading [level=1] [ref=e24]:
          - text: Practice Website for
          - emphasis [ref=e25]: Rahul Shetty Academy
          - text: Students
        - link "Register" [ref=e26] [cursor=pointer]:
          - /url: "#/auth/register"
      - generic [ref=e28]:
        - paragraph [ref=e29]:
          - generic [ref=e30]: Register to sign in with your personal account
        - generic [ref=e31]:
          - heading "Log in" [level=1] [ref=e32]
          - generic [ref=e33]:
            - generic [ref=e34]:
              - generic [ref=e35]: Email
              - textbox "email@example.com" [ref=e36]: JobsforRahulD@gmail.com
            - generic [ref=e37]:
              - generic [ref=e38]: Password
              - textbox "enter your passsword" [ref=e39]: Riyaansh2011*
            - button "Login" [active] [ref=e40] [cursor=pointer]
          - link "Forgot password?" [ref=e41] [cursor=pointer]:
            - /url: "#/auth/password-new"
          - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
    - generic [ref=e43]:
      - heading "Why People Choose Us?" [level=1] [ref=e46]
      - generic [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]: 
          - generic [ref=e51]:
            - heading "3546540" [level=1]
            - paragraph [ref=e52]: Successfull Orders
        - generic [ref=e53]:
          - generic [ref=e54]: 
          - generic [ref=e56]:
            - heading "37653" [level=1]
            - paragraph [ref=e57]: Customers
        - generic [ref=e58]:
          - generic [ref=e59]: 
          - generic [ref=e61]:
            - heading "3243" [level=1]
            - paragraph [ref=e62]: Sellers
      - generic [ref=e63]:
        - generic [ref=e64]:
          - generic [ref=e65]: 
          - generic [ref=e67]:
            - heading "4500+" [level=1]
            - paragraph [ref=e68]: Daily Orders
        - generic [ref=e69]:
          - generic [ref=e70]: 
          - generic [ref=e72]:
            - heading "500+" [level=1]
            - paragraph [ref=e73]: Daily New Customer Joining
  - alert "Incorrect email or password." [ref=e75]
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
  11 |             await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  12 |             await page.waitForLoadState('networkidle');
  13 |             await page.locator("#userEmail").fill("JobsforRahulD@gmail.com");
  14 |             await page.locator("#userPassword").fill("Riyaansh2011*");
  15 |             await page.locator("#login").click();
  16 |             //await page.waitForLoadState('networkidle');
> 17 |             await page.waitFortimeout(5000);
     |                        ^ TypeError: page.waitFortimeout is not a function
  18 |             
  19 |             const products = page.locator("div[class='row']");
  20 |             console.log(await products.count());
  21 | 
  22 | 
  23 | })
```