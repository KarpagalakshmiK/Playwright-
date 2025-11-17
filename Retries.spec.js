const {test,expect} =require('@playwright/test')

test("amazon",async({page})=>{
    await page.goto("https://www.amazon.com/");

    await page.locator("#twotabsearchtextbox").fill("perfume");

    await page.keyboard.press("Enter");

    await page.waitForSelector("(//button[text()='Add to cart'])[1]");

    await page.locator("(//button[text()='Add to cart'])[1]").click();

    await page.waitForTimeout(3000);

    const count=await page.locator("//span[@id='nav-cart-count']");
    console.log(await count.textContent());

    await page.waitForTimeout(5000);

    

})