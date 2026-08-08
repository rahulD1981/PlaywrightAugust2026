
const { test, expect } = require('@playwright/test');
const { testData } = require('./fixtures/testdata');

for (const data of testData) {
  test(`Data Driven Test Case Part 2- ${data.username}`, async ({ page }) => {
    console.log('Username:', data.username);
    console.log('Password:', data.password);
    console.log('Product:', data.productname);


  });
}
//////////////////////////////////////////
