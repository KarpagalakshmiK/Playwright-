const{test,expect} =require('@playwright/test');

test('Home Page',async ({page})=>{
    await page.goto("https://www.facebook.com/");

    const pageTitle=page.title();
    console.log("Page title is",pageTitle);

    await expect(page).toHaveTitle('Facebook – log in or sign up');

    const pageurl=page.url();
    console.log("Page url is",pageurl);

    await expect(page).toHaveURL("https://www.facebook.com/");

    await page.close();
})

