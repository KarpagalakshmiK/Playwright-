const {test,expect}=require('@playwright/test')

test('InputBox',async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form");

    await expect(page.locator('id=firstName')).toBeVisible();
    
    await expect(page.locator('id=firstName')).toBeEmpty();

    await expect(page.locator('id=firstName')).toBeEditable();

    await expect(page.locator('id=firstName')).toBeEnabled();


    await page.locator("id=firstName").fill("karpaga");

    await page.waitForTimeout(5000);

})