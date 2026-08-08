const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
   grep: /(?=.*@smoke)(?=.*@regression)/, //runs both somoke and regression tagged test cases
    grep: /@smoke|@sanity/,//runs either smoke or sanity tagged test cases
     grep: /@smoke/, // runs only smoke tagged test cases
     

  testDir: './tests',
  timeout: 30 * 1000,
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
   projects: [
    {
      name: 'Project1',
      use: {
        headless: false,
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'on',
         use: { browserName: 'chromium' },
      },
    },
  ],
  reporter: 'list',
});
