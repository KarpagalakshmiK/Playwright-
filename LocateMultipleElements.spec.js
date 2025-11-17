import {test,expect} from '@playwright/test'

test('LocateMultipleElements', async({page})=>{

    await page.goto("https://www.demoblaze.com/");

    await page.waitForSelector("//div[@class='card-block']//a");

    const elem=await page.$$("//div[@class='card-block']//a");

    for(const ele of elem){
        const text=await ele.textContent();
        console.log(text);

    }
    
})

