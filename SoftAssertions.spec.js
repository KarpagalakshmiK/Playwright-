import {test,expect} from '@playwright/test'

test('SoftAssertions', async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    //Hard assertions
    // await expect(page).toHaveTitle("STORE");

    // await expect(page).toHaveURL("https://www.demoblaze.com/");

    // await expect(page.locator('id=nava')).toBeVisible();

    //soft assertions

    await expect.soft(page).toHaveTitle("STORE12");

    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");

    await expect.soft(page.locator('id=nava')).toBeVisible();


})