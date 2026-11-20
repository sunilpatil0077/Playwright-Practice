const { test } = require('@playwright/test');

test("Open browser and navigate to example.com", async ({ page }) => {
  await page.goto('https://example.com');
});
