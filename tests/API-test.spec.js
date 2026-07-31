const {test,expect}= require ("@playwright/test")

test("API Post Request", async({request})=>{

const response=await request.post("https://reqres.in/api/users")
expect(response.status()).toBe(201)
})



test("API GET REQUEST",async({request})=>{


    const response= await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)

    const text=await response.text();
    expect(text).toContain('Janet')
})

test("API GET SINGLE RESOURCE",async({request})=>{


    const response= await request.get('https://reqres.in/api/unknown/2')
    //expect(response.status()).toBe(200)
    console.log(response)

   
})
test("Update Resource",async({request})=>{


    const response= await request.get('https://reqres.in/api/users/2')
    //expect(response.status()).toBe(200)
    //console.log(response)

   
})