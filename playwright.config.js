const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  workers : 4,
  fullyparallel: true,
  expect: {
    timeout: 5000
  },
  reporter: [["line"], ["allure-playwright"]],
    /*
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['allure-playwright']
  */
    
  
  use: {
    baseURL : "https://tutorialsninja.com/demo/",
    screenshot: 'only-on-failure',
    video: 'on',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    /*
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    */
  ],
});
