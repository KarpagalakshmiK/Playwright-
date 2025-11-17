import { test, expect } from '@playwright/test';

test('Simple Dialogs', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    const button=await page.locator("//button[normalize-space()='Copy Text']");

    const textbox1=await page.locator("id=field1").fill("Akshat");

    await button.dblclick();

    const textbox=await page.locator("id=field2");

    await expect (textbox).toHaveValue("Akshat");

    await page.waitForTimeout(5000);

})