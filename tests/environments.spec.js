const {test,expect}= require("@playwright/test")

test("Verify Differenct Environments",async({page})=>{

await page.goto(process.env.URl)
   

})