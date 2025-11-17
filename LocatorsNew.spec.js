import {test,expect} from '@playwright/test'
test('LocatorsNew', async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // await page.waitForSelector('company-branding');

    const logo=await page.getByAltText('company-branding');

    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')

    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {type:'submit'}).click();

    const name=await page.locator("//span[@class='oxd-userdropdown-tab']//child::p").textContent();

    console.log("name is",name);

    await expect(await page.getByText(name)).toBeVisible();

    await page.locator("//span[text()='My Info']").click();

    await page.getByPlaceholder('First Name').click();

    await page.getByPlaceholder("First Name").fill('Karpaga');

    // await page.getByPlaceholder("Middle Name").fill('K');

    // await page.getByPlaceholder("Last Name").fill('Karpaga');

    // await page.locator("//span[text()='Admin']").click();

    await page.pause();


    
    // await page.getByLabel('Employee Full Name').fill('');





})