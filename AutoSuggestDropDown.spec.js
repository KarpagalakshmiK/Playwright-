import {test,expect} from '@playwright/test'

test('AutoSuggestDropDown',async({page})=>{

    await page.goto("https://www.globalsqa.com/demoSite/practice/autocomplete/combobox.html")

    await page.locator("//input[contains(@class,'custom-combobox-input')]").fill("A");

    

    


    await page.waitForSelector("//li[@class='ui-menu-item']");

    const elem=await page.$$("//li[@class='ui-menu-item']");

    

    for(let e of elem){
        const text=await e.textContent();
        if(text.includes("Java")){
            await e.click();
            break;
            
        }

        
        
        
    }

    await page.waitForTimeout(5000);


})