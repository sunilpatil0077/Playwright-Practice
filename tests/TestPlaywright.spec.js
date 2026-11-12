const { test, expect } = require('@playwright/test');

test('drag and drop example', async ({ page }) => {
    // Demo page with drag-and-drop
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const source = '#column-a';
    const target = '#column-b';

    // Perform drag and drop
    await page.dragAndDrop(source, target);

    // Basic assertion (header text should swap)
    await expect(page.locator('#column-a header')).toHaveText('B');
    await expect(page.locator('#column-b header')).toHaveText('A');
});