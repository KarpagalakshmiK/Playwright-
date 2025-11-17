const {test,expect}=require ('@playwright/test')

test("KeyboardActions",async({page})=>{

    await page.goto("https://gotranscript.com/text-compare");

    await page.locator('[name="text1"]').fill("I love Akshat");

    //CTRL+A
    await page.keyboard.press("Control+A");//when using multiple keys like control+a(combintion), use press

    //CTRL+C
    await page.keyboard.press("Control+C");//control used for windows, while using mac follow Meta+C

    //tab
    await page.keyboard.down("Tab");//down for pressing the key
    await page.keyboard.up("Tab");//up for releasing the key

    //CTRL+V
    await page.keyboard.press("Control+V");

    


    await page.waitForTimeout(5000);

})