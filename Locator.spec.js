import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto("https://www.demoblaze.com/");

    console.log(page.title());

    //await page.locator('id=login2').click();
    await page.click('id=login2')
    
    await page.fill('id=loginusername','lakshmi')

    await page.fill('id=loginpassword','1234')

    await page.click("//button[text()='Log in']")

    // const logout= await page.locator("//a[text()='Log out']")

    // await expect(logout).toBeVisible();

    await page.close();

})
