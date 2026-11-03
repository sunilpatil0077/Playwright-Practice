const { test,chromium, firefox } = require ('@playwright/test');  // Or 'chromium' or 'webkit'.


test("Open browser and navigate to example.com", async () => {
 
  const browser = await firefox.launch();
  const context=await browser.newContext()
  const page = await context.newPage();
  await page.goto('https://example.com');
  await browser.close();
});

