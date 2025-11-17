import {test,expect} from '@playwright/test'

test('Assertions',async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");

    const url=page.url();

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    const title=await page.title();

    console.log("Title is",title);

    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    const logo=await page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();

    const search=await page.getByPlaceholder("Search store");

    try{
        await expect(search).toBeEnabled();

        await search.fill("Mobile");
        

    }catch(error){
        console.log("not displayed");
    }

    const gender=await page.locator('id=gender-male');

    // gender.click();

    // await expect(gender).toBeChecked();

    if(!(await gender.isChecked())){
        await gender.click();
    }

    const checkbox=await page.getByLabel("Newsletter:");

    await expect(checkbox).toBeChecked();

    const register=await page.locator("id=register-button");

    await expect(register).toHaveAttribute('type','submit');

    const reg_heading=await page.locator("//div[@class='page-title']//h1");
    await expect(reg_heading).toHaveText("Register");

    await expect(reg_heading).toContainText("Reg");

    const email=await page.locator('id=Email')

    await email.fill('test@123.com');

    await expect(email).toHaveValue('test@123.com');

    const dropdown=await page.locator("//select[@id='customerCurrency']//option");

    await expect(dropdown).toHaveCount(1);







})