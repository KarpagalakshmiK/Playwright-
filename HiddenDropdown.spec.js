import {test,expect} from '@playwright/test'

test('HiddenDropdown',async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.keyboard.press("Enter");

    await page.locator("//span[text()='PIM']").click();

    await page.locator("//label[text()='Sub Unit']//following::div[4]").click();

    await page.waitForSelector("//div[@role='option']//span");

    const options=await page.$$("//div[@role='option']//span");

    for(let option of options){
        const text= await option.textContent();
        console.log(text);
        if(text.includes("Finance")){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})