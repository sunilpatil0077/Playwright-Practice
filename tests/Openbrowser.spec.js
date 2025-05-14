const { chromium } = require ('playwright');  // Or 'chromium' or 'webkit'.

(async () => {
  const browser = await chromium.launch();
  const context=await browser.newContext()
  const page = await context.newPage();
  await page.goto('https://example.com');
  await browser.close();
})();

