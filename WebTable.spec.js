import {test,expect} from '@playwright/test';

test("WebTables",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table=await page.locator("id=productTable");

    //columns
    const headers=await table.locator("thead tr th");
    console.log("No of headers is",await headers.count());
    expect(await headers.count()).toBe(4);

    //rows
    const rows=await table.locator("tbody tr");
    console.log("No of rows",await rows.count());
    expect(await rows.count()).toBe(5);

    //select checkbox
    // const r=rows.filter({
    //     has:page.locator("td"),
    //     hasText: "Tablet"
    // })
    // await r.locator("input").check();


    //select multiple products
    await selectProduct(rows,page,"SmartPhone");
    await selectProduct(rows,page,"SmartWatch");
    await selectProduct(rows,page,"Laptop");

    await page.waitForTimeout(5000);

    //read data from tables using 
    // for(let i=0;i<await rows.count();i++){
    //     const row=rows.nth(i);
    //     const data=row.locator("td");

    //     for(let j=0;j<await data.count()-1;j++){
    //         console.log(await data.nth(j).textContent());
    //     }

    // }

    const pages=await page.locator("#pagination li a");
    console.log(await pages.count());

    for(let p=0;p< await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
        }
        for(let i=0;i<await rows.count();i++){
        const row=rows.nth(i);
        const data=row.locator("td");

        for(let j=0;j<await data.count()-1;j++){
            console.log(await data.nth(j).textContent());
        }

    }

    await page.waitForTimeout(5000);

    }



    




})

async function selectProduct(rows,page,name){
    const r=rows.filter({
        has:page.locator("td"),
        hasText: name
    })
    await r.locator("input").check();//await can only be used if function is made async
}

