# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PlaywrightLearning\tables.spec.js >> Table Find name and then age of that person
- Location: tests\PlaywrightLearning\tables.spec.js:24:1

# Error details

```
ReferenceError: n is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11] [cursor=pointer]: Elements
        - list [ref=e23]:
          - listitem [ref=e24] [cursor=pointer]:
            - link "Text Box" [ref=e25]:
              - /url: /text-box
          - listitem [ref=e28] [cursor=pointer]:
            - link "Check Box" [ref=e29]:
              - /url: /checkbox
          - listitem [ref=e32] [cursor=pointer]:
            - link "Radio Button" [ref=e33]:
              - /url: /radio-button
          - listitem [ref=e36] [cursor=pointer]:
            - link "Web Tables" [ref=e37]:
              - /url: /webtables
          - listitem [ref=e40] [cursor=pointer]:
            - link "Buttons" [ref=e41]:
              - /url: /buttons
          - listitem [ref=e44] [cursor=pointer]:
            - link "Links" [ref=e45]:
              - /url: /links
          - listitem [ref=e48] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e49]:
              - /url: /broken
          - listitem [ref=e52] [cursor=pointer]:
            - link "Upload and Download" [ref=e53]:
              - /url: /upload-download
          - listitem [ref=e56] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e57]:
              - /url: /dynamic-properties
      - generic [ref=e60]: Forms
      - generic [ref=e73]: Alerts, Frame & Windows
      - generic [ref=e85]: Widgets
      - generic [ref=e98]: Interactions
      - generic [ref=e110]: Book Store Application
    - generic [ref=e123]:
      - heading "Web Tables" [level=1] [ref=e126]
      - generic [ref=e127]:
        - generic [ref=e128]:
          - button "Add" [ref=e130] [cursor=pointer]
          - generic [ref=e132]:
            - textbox "Type to search" [ref=e133]
            - button [ref=e134] [cursor=pointer]
        - table [ref=e137]:
          - rowgroup [ref=e138]:
            - row [ref=e139]:
              - columnheader "First Name" [ref=e140]
              - columnheader "Last Name" [ref=e141]
              - columnheader "Age" [ref=e142]
              - columnheader "Email" [ref=e143]
              - columnheader "Salary" [ref=e144]
              - columnheader "Department" [ref=e145]
              - columnheader "Action" [ref=e146]
          - rowgroup [ref=e147]:
            - row [ref=e148]:
              - cell "Cierra" [ref=e149]
              - cell "Vega" [ref=e150]
              - cell "39" [ref=e151]
              - cell "cierra@example.com" [ref=e152]
              - cell "10000" [ref=e153]
              - cell "Insurance" [ref=e154]
              - cell [ref=e155]:
                - generic [ref=e156]:
                  - generic "Edit" [ref=e157] [cursor=pointer]
                  - generic "Delete" [ref=e160] [cursor=pointer]
            - row [ref=e163]:
              - cell "Alden" [ref=e164]
              - cell "Cantrell" [ref=e165]
              - cell "45" [ref=e166]
              - cell "alden@example.com" [ref=e167]
              - cell "12000" [ref=e168]
              - cell "Compliance" [ref=e169]
              - cell [ref=e170]:
                - generic [ref=e171]:
                  - generic "Edit" [ref=e172] [cursor=pointer]
                  - generic "Delete" [ref=e175] [cursor=pointer]
            - row [ref=e178]:
              - cell "Kierra" [ref=e179]
              - cell "Gentry" [ref=e180]
              - cell "29" [ref=e181]
              - cell "kierra@example.com" [ref=e182]
              - cell "2000" [ref=e183]
              - cell "Legal" [ref=e184]
              - cell [ref=e185]:
                - generic [ref=e186]:
                  - generic "Edit" [ref=e187] [cursor=pointer]
                  - generic "Delete" [ref=e190] [cursor=pointer]
        - generic [ref=e194]:
          - group [ref=e196]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e197]:
            - text: Page
            - strong [ref=e198]: 1 of 1
          - combobox [ref=e200]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e207]:
    - generic [ref=e208]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | 
  4  | test.describe.configure({mode:'parallel'}); // run all test cases in parallel modes
  5  | 
  6  | test('Table functionality Automation', async ({ page }) => {
  7  | await page.goto('https://demoqa.com/webtables');
  8  | 
  9  | //Total No of row count in the table
  10 | const RowSize = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr').count();
  11 | console.log("Row Size is : " + RowSize);
  12 | 
  13 | //Count total number of cells in the table
  14 | const columnSize = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr td').count();
  15 | console.log("Column Size is : " + columnSize);
  16 | 
  17 | //get all data from columns, Entire column data wil be saved in  variable 
  18 | const retreiveColumnData = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr td:nth-child(2)').allTextContents();
  19 | console.log("Column Data is : " + retreiveColumnData);
  20 | });
  21 | 
  22 | 
  23 | 
  24 | test('Table Find name and then age of that person', async ({ page }) => {
  25 | 
  26 | await page.goto('https://demoqa.com/webtables');
  27 | 
  28 | const rowPath  =  await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr');
  29 | const RowSize = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr').count();
  30 | console.log("Row Size is : " + RowSize);
  31 | 
  32 | const columData = await page.locator('.-striped.-highlight.table.table-striped.table-bordered.table-hover tbody tr td:nth-child(2)');
  33 | 
  34 | for (let i = 0; i < RowSize; i++) {
  35 | 
  36 | const columnText =  await columData.nth(i).textContent();
  37 | console.log("Column Data is : " + columnText);
  38 | if(columnText === 'Gentry') {
  39 | //From above entire row path which is taken. then nth logic and column number is taken. based on rowpath.nth(i) it navigates to that row
> 40 | const ageText = await n.nth(i).locator('td:nth-child(3)').textContent();
     |                 ^ ReferenceError: n is not defined
  41 | console.log("Age of Gentry is : " + ageText); 
  42 | }
  43 | 
  44 | }
  45 | });
  46 | 
  47 | test('Multi Browser', async ({ browser }) => {
  48 |     const context = await browser.newContext();
  49 |     const page = await context.newPage();
  50 | 
  51 |     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  52 |     const documentLink = "a[href='https://rahulshettyacademy.com/documents-request']";
  53 |     
  54 |    
  55 |     const [newPage] = await Promise.all([
  56 |         context.waitForEvent('page'),
  57 |         page.click(documentLink),
  58 |         await page.waitForTimeout(2000),
  59 |          await page.screenshot({path:'screenshot.png'})
  60 |     ]);
  61 | 
  62 |     await newPage.waitForLoadState();
  63 |     console.log(await newPage.title());
  64 |     await newPage.close();
  65 | 
  66 |     // continue on original page
  67 |     await page.reload();
  68 |     await page.waitForTimeout(2000);
  69 |     await context.close();
  70 | })
  71 | 
```