const {test,expect}=require('@playwright/test')

test('Checkbox',async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form");

    await page.check("//input[@id='hobbies-checkbox-1']");

    await page.waitForTimeout(5000);

})