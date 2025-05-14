const {test,expect}= require("@playwright/test")
let webContext;

test("Storage State",async({browser})=>{
const context=await browser.newContext();
const page= await context.newPage()
await page.goto("https://rahulshettyacademy.com/client")
await page.locator("#userEmail").fill("anshika@gmail.com")
await page.locator("#userPassword").fill("Iamking@000")
await page.locator("[value='Login']").click()
await page.waitForLoadState("networkidle")
await context.storageState({path:'storageState.json'})
 webContext = await browser.newContext({storageState:'storageState.json'})
})

test("Storage State Injecting",async()=>{
    // const page=await webContext.newContext()
   // await page.goto("https://rahulshettyacademy.com/client")
    const page=await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client")


})