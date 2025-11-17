import {test,expect} from '@playwright/test';

test("WebTableDemo",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table=await page.locator("//table[@name='BookTable']");

    //cols count
    const cols=await table.locator("tbody tr th");
    console.log(await cols.count());

    //rows count
    const rows=await table.locator("tbody tr:not(:first-child)");
    console.log(await rows.count());

    for(let i=0;i<await rows.count();i++){
        const row=rows.nth(i);
        const data=row.locator("td");

        for(let j=0;j<await data.count();j++){
            console.log(await data.nth(j).textContent());
        }
        
    }







})