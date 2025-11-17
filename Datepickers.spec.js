import {test,expect} from '@playwright/test';

test("Datepickers",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("id=datepicker").fill("05/21/2025");

    const year="2024"
    const month="March"
    const date="15"

    await page.locator("#datepicker").click();

    while(true){
        const currentmonth= await page.locator(".ui-datepicker-month").textContent();
        const currentyear=await page.locator(".ui-datepicker-year").textContent();

        if(currentyear==year && currentmonth==month){
            break;
        }
        await page.locator('[title="Prev"]').click();
    }
    
    //by using loopconst dates=await page.$$("//td[@data-handler='selectDay']//a");
    // for(const dd of dates){
    //     if(await dd.textContent()==date){
    //        await dd.click();
    //        break;
    //     }
    // }

    //use direct date

    await page.locator(`//td[@data-handler='selectDay']//a[@class='ui-state-default' and text()='${date}']`).click();


    await page.waitForTimeout(5000);
})