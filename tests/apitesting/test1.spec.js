const { test, expect, request } = require('@playwright/test');
const { APIUtils } = require('../framework/utils/class APIUtils');

const loginPayload = {
  userEmail: 'jobsforrahuld@gmail.com',
  userPassword: 'Riyaansh2011*'
};

let token;
let orderId;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayload);

  token = await apiUtils.getToken();
  expect(token).toBeTruthy();

  const productOrderedId = await apiUtils.getProductId();
  expect(productOrderedId).toBeTruthy();

  const orderResponse = await apiUtils.createOrder({
    orders: [{
      country: 'Cuba',
      productOrderedId
    }]
  });

  orderId = orderResponse.orderId;
  expect(orderId).toBeTruthy();

  await apiContext.dispose();
});

test('API Testing 1', async ({ page }) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot.png' });
});