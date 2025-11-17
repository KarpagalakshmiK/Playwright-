import { test, expect } from '@playwright/test';

test.skip('Simple Dialogs', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling dialog window handler
    page.on("dialog",async dialog=>{
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();

    })

     await page.locator("//button[normalize-space()='Simple Alert']").click();

     await page.waitForTimeout(5000);




});


test.skip('Confirmation Dialogs', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling dialog window handler
    page.on("dialog",async dialog=>{
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();

    })
       await page.locator("//button[normalize-space()='Confirmation Alert']").click();

       await expect (page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!");

        await page.waitForTimeout(5000);

});

test('Prompt Dialogs', async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    //enabling dialog window handler
    page.on("dialog",async dialog=>{
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue("Harry Potter"));
        await dialog.accept("Akshat");

    })

    await page.locator("//button[normalize-space()='Prompt Alert']").click();

    await expect (page.locator("//p[@id='demo']")).toHaveText("Hello Akshat! How are you today?");

    await page.waitForTimeout(5000);



});