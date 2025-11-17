const {test,expect} =require('@playwright/test')

test("amazon",async({page})=>{
    await page.goto("https://www.amazon.com/");
    await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");
    await page.waitForTimeout(3000);
})

test("nykaa",async({page})=>{

    await page.goto("https://www.nykaa.com/");
    await expect(page).toHaveTitle("Buy Cosmetics Products & Beauty Products Online in India at Best Price | Nykaa");
    await page.waitForTimeout(3000);
})

test("disney",async({page})=>{
    await page.goto("https://www.disney.in/");
    //console.log(await page.title());
    await expect(page).toHaveTitle("Disney India | The Official Home For All Things Disney");
    await page.waitForTimeout(3000);
})