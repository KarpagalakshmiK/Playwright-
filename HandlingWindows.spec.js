import {test,expect,chromium} from '@playwright/test'
import { exec } from 'child_process';

test("HandlingWindows",async({page})=>{
     const browser=await chromium.launch();
     const context=await browser.newContext();

     const page1=await context.newPage();
     const page2=await context.newPage();

     //to find the no.of pages
     const allpages=context.pages();
     console.log("Total no.of pages",allpages.length);

     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await expect(page1).toHaveTitle("OrangeHRM");

     await page2.goto("https://www.orangehrm.com/");
     await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");

})


test.only("Handling Multiple Windows",async({page})=>{
     const browser=await chromium.launch();
     const context=await browser.newContext();

     const page1=await context.newPage();
     const page2=await context.newPage();

     

     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await expect(page1).toHaveTitle("OrangeHRM");

     const pagePromise=context.waitForEvent('page');
     await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

     const newPage=await pagePromise;
     await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");

     await page1.waitForTimeout(200);
     await newPage.waitForTimeout(2000);

     await browser.close();
     })


     


