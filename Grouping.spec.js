const {test,expect} =require ('@playwright/test')

test.beforeAll(async()=>{
    console.log("BeforeAll hooks");
})

test.afterAll(async()=>{
    console.log("AfterAll hooks");
})

test.beforeEach(async()=>{
    console.log("BeforeEach hooks");
})

test.afterEach(async()=>{
    console.log("AfterEach hooks");
})
test.describe.only("Regression groups",()=>{
    test("Reg",async()=>{
    console.log("This is 1st regression case");


})

 test("Reg1",async()=>{
    console.log("This is 2nd regression case");


})


})



test.describe("Production groups",()=>{
    test("Prod",async()=>{
    console.log("This is 1st Production case");


})

test("Prod1",async()=>{
    console.log("This is 2nd Production case");


})

})

