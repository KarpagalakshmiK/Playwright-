import {test,expect} from '@playwright/test'

test('DropDown',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   //await page.locator("id=country").selectOption({label:'India'}); //label/visible text

   //await page.locator("id=country").selectOption('India');   //visible text

    //await page.locator("id=country").selectOption({value:'china'}); // value

    //await page.locator("id=country").selectOption({index: 1});  //using index

    //await page.selectOption("id=country","India");

    // const elem=page.locator("//select[@id='country']//option");

    // await expect(elem).toHaveCount(10); check no.of options in dropdown(approach 1)

    // const elem=await page.$$("//select[@id='country']//option");
    // console.log(elem.length);
    // for(const e of elem){
    //     const text= await e.textContent();
    //     console.log(text);
    // }

   //  const elem=await page.$$("//select[@id='country']//option");

   //  await expect(elem.length).toBe(10);// check no.of options in dropdown(approach 2)

   //to check presence of the element(will accept partial text also)
   // const elem=await page.locator("//select[@id='country']").textContent();

   // await expect(elem.includes("xy")).toBeTruthy();

    //to check presence of the element(using loop)
   //  const elem=await page.$$("//select[@id='country']//option");
   //  let sts=false;
   //  for(const e of elem){
   //    let value=await e.textContent();
   //    if(value.includes("China")){
   //       sts=true;
   //       break;

   //    }
      

   //  }
   //  expect(sts).toBeTruthy();

   const elem=await page.$$("//select[@id='country']//option");
   for(const e of elem){
      const value=await e.textContent();
      if(value.includes('India')){
         await page.waitForSelector("id=country");
         await page.selectOption("id=country",value);
         break;
      }
   }
    

    



    



   await page.waitForTimeout(5000);


})