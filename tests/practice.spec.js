const { test } = require('@playwright/test');

test('open browser', async ({ page }) => {
    await page.goto('https://example.com');
});