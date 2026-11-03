const { test } = require('@playwright/test');

test("Practice Playwright", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("anshika@gmail.com")
await page.locator("#userPassword").fill("Iamking@000")
await page.locator("[value='Login']").click()
console.log('Login Successful');
await page.getByPlaceholder("Search").fill("adidas")
await page.pause();
});