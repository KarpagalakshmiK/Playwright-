import {test,expect} from '@playwright/test';

test("DatepickerRange",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#txtDate").click();

    const year="2024"
    const month="Feb"
    const date="10"

    

    await page.locator("//select[@class='ui-datepicker-month']").selectOption(month);

    await page.locator(".ui-datepicker-year").selectOption(year);

    //by using loop
    const dates=await page.$$("//td[@data-handler='selectDay']//a");
    for(const dd of dates){
        if(await dd.textContent()==date){
           await dd.click();
           break;
        }
    }



       //await page.locator("id=country").selectOption('India');

    await page.waitForTimeout(5000);
})