const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.waitForLoadState('networkidle');
  const products = await page.$$eval('div.product', els => els.map(el => {
    const title = el.querySelector('h4')?.textContent?.trim();
    const id = el.getAttribute('data-product-id');
    const anyId = el.querySelector('[data-product-id]')?.getAttribute('data-product-id');
    const buttonText = el.querySelector('button')?.textContent?.trim();
    return { title, id, anyId, buttonText, html: el.innerHTML.slice(0, 200) };
  }));
  console.log(JSON.stringify(products, null, 2));
  await browser.close();
})();
