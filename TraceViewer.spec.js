import {test,expect} from '@playwright/test'

test("TraceViewer",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@12");
    await page.locator("//button[normalize-space()='Log in']").click();
    const msg=await page.locator("#nameofuser");
    await expect(msg).toBeVisible();
})