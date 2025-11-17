import {test,expect} from '@playwright/test'

test("Page screenshot",async({page})=>{
  
await page.goto("https://demoblaze.com/");
await page.screenshot({path:"tests/screenshots/"+Date.now()+"HomePage.jpg"});//u can use .png also
})

test("Full page screenshot",async({page})=>{
await page.goto("https://demoblaze.com/");
await page.screenshot({path:"tests/screenshots/"+Date.now()+"FullPage.jpg",fullPage:true});

})

test.only("Element screenshot",async({page})=>{
await page.goto("https://demoblaze.com/");
await page.waitForSelector("(//div[@id='tbodyid']//div)[1]");
await page.locator("(//div[@id='tbodyid']//div)[1]").screenshot({path:"tests/screenshots/"+Date.now()+"ElementPage.jpg"});

})

