const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on('request', request => {
    const url = request.url();
    if (url.includes('/api/ecom/')) {
      console.log('REQ', request.method(), url, request.postData() || '', request.headers());
    }
  });
  page.on('response', async response => {
    const url = response.url();
    if (url.includes('/api/ecom/')) {
      const body = await response.text();
      console.log('RES', response.status(), url, body.slice(0, 1000));
    }
  });

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.fill('#userEmail', 'jobsforrahuld@gmail.com');
  await page.fill('#userPassword', 'Riyaansh2011*');
  await Promise.all([
    page.click('#login'),
    page.waitForNavigation({ waitUntil: 'networkidle' })
  ]);
  await page.waitForTimeout(3000);
  await browser.close();
})();