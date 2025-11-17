const {test,expect}=require('@playwright/test')

test('RadioButtons',async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form");

    await expect(page.locator("//input[@name='gender']//following-sibling::label[text()='Female']")).toBeVisible();

    // await page.locator("//input[@name='gender']//following-sibling::label[text()='Female']").click();

    // await page.waitForTimeout(5000);
})