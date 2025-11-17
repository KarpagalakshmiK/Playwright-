const {test,expect} = require('@playwright/test')

test("test1",async({page})=>{

    console.log("This is test1");


})

// test.skip("test2",async({page})=>{

//     console.log("This is test2");


// })

test("test3",async({page,browserName})=>{
    
    if(browserName==="chromium"){
        test.skip();
    }
    console.log("This is test3");

})

test("test4",async({page})=>{

    test.fixme();
    console.log("this is test4");
})

test("test5",async({page})=>{

    test.fail();
    console.log("this is test5");
    expect(2).toBe(1);
})

// test("test6",async({page,browserName})=>{
//     if(browserName==="chromium"){
//         test.fail();
//     }

// })

test("test7",async({page})=>{
    // test.slow();
    test.setTimeout(5000);
    console.log("this is test7");
    await page.goto("https://demoblaze.com/index.html");
})
    

    


