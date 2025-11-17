import {test,expect} from '@playwright/test'

test('BootStrapDropDown',async({page})=>{

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator("//button[contains(@class,'multiselect dropdown-toggle')]").click();

    


   



    // const element=await page.$$("//label[@class='checkbox']");
    // console.log(element.length);
    // await expect(element.length).toBe(11);    
    // for(const e of element){
    //     console.log(await e.textContent());
    // }

    //select multiple actions from dropdown
    // const element=await page.$$("//label[@class='checkbox']");
    // for(let e of element){
    //     const value=await e.textContent();
    //     //console.log(await e.textContent());
    //     if(value.includes("Angular")|| value.includes("jQuery")){
    //         await e.click();
    //     }
    // }

    //deselect checkbox

    const element=await page.$$("//label[@class='checkbox']");
    for(let e of element){
        const value=await e.textContent();
        //console.log(await e.textContent());
        if(value.includes("HTML")|| value.includes("CSS")){
            await e.click();
        }
    }

     await page.waitForTimeout(5000);
})