import {test,expect} from '@playwright/test'

let page;
test.beforeEach(async({browser})=>{
    page=await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();


});

test.afterEach(async()=>{
    //logout
    await page.locator("#logout2").click();
})

test("Home Page",async()=>{


    
    //home page
    await page.waitForSelector(".card-title");
    let titles=await page.$$(".card-title");
    for(const title of titles){
        const text= await title.textContent();
        console.log(text);
    }

    
})

test("Add to Cart", async()=>{

    

    //add to cart
    await page.locator("(//h4[@class='card-title'])[1]").click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on("dialog",async dialog=>{
        //expect(dialog.type()).toContain("alert");//this line u can ignore as well
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })
await page.waitForTimeout(5000);
    

    
    
})


