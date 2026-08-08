const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  workers : 2,
  fullyparallel: true,
  expect: {
    timeout: 5000
  },
  use: {
    screenshot: 'only-on-failure',
    video: 'on',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
 
  reporter: 'list',
});
