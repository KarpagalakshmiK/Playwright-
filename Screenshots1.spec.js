import {test,expect} from '@playwright/test'

test("Page screenshot",async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();

})