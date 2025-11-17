import {test,expect} from '@playwright/test'

test('MultipleDropDown',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   await page.selectOption("id=colors",['Blue','Yellow']);

   //Assertions

   const ele=page.locator("//select[@id='colors']//option");

    await expect(ele).toHaveCount(10);

   const elem=await page.$$("//select[@id='colors']//option");

   console.log(elem.length);

   await expect(elem.length).toBe(7);
//presence of element
   const content=await page.locator("id=colors").textContent();
   await expect(content.includes("Navy")).toBeTruthy();



   await page.waitForTimeout(5000);

})