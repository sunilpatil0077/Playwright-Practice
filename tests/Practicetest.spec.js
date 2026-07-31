const {test,expect}= require("@playwright/test")

test.beforeEach(async({page})=>{

    await page.goto("/")
    //const pagetitle= page.locator('.title')
    await expect(page).toHaveTitle("Automation Testing Practice");
})

test("Verify Title",async({page})=>{

    await expect(page).toHaveTitle("Automation Testing Practice");
   
})

test("Enter User Detaisl into field",async({page})=>{

   await page.getByPlaceholder("Enter Name").fill('Sunil')

})

test("Verify the Radio Button",async({page})=>{

    const RadioButon= page.locator('//label[@class="form-check-label"]').first()
    await RadioButon.check()
     await expect(RadioButon).toBeChecked();
 
 })
 test("Select Option Dropdown",async({page})=>{

    await page.mouse.wheel(0,300)
   await page.selectOption("#country",'India')
   await page.locator("#country").selectOption({index},'2')
 
 })
 test("Handle File Uploads",async({page})=>{
    await page.mouse.wheel(0,600)
   const SingleFile=  page.locator('#singleFileInput')
   await SingleFile.setInputFiles("D:/Chrome")
 
 })
 test("Perform Drag and Drop",async({page})=>{

    const DragElement= page.locator("#draggable")
    const DragElement2= page.locator("#droppable")
    await DragElement.dragTo(DragElement2)
 
 })

 test("Handle Check Boxes", async({page})=>{
    await page.mouse.wheel(0,600)
    const checkboxvalidation= page.locator('#sunday')
    await checkboxvalidation.check();
    await expect(checkboxvalidation).toBeChecked()
 })

 test("Dialog Box Handle", async({page})=>{

page.on("Dialog handler", dialog =>{

    dialog.accept()
})
   await page.locator("#alertBtn").click()
   await page.pause()
 })
