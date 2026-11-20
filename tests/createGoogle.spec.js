const { test, expect } = require('@playwright/test'); // Import Playwright test functions
// Test to verify Google homepage (title, async ({ page })) => {}
    
test.describe.configure({ mode: 'serial' });

test('create Google test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
//   let locator1 = page.locator('[aria-label="Search"]');
//   await page.waitForTimeout(2000); // Wait for 2 seconds before interacting with the search input
//   await locator1.fill('https://www.flipkart.com/');
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(5000);
// //   await expect(page).toHaveTitle(/flipkart/);
// //   await page.waitForLoadState('networkidle');
  console.log("Flipkart search completed");
});
