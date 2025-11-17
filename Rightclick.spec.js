import {test,expect} from '@playwright/test'

test("Rightclick",async({page})=>{

    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button=await page.locator("//span[text()='right click me']");

    await button.click({button:"right"});//to perform riht click action, if use want to click left replace with left

    // await page.waitForSelector("//span[text()='Edit']");
    
    // await page.locator("//span[text()='Edit']").click();

    page.on("dialog",async dialog=>{
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("clicked: edit");
        await dialog.accept();

    })
       await page.locator("//span[text()='Edit']").click();
    await page.waitForTimeout(7000);


})