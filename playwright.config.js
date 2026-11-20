// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testIgnore: process.env.CI ? ['**/storageState.spec.js'] : [],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: process.env.CI ? [['html'], ['list']] : 'html',
  use: {
    headless: true,
    trace: 'on-first-retry',
    navigationTimeout: 30000,
    actionTimeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
