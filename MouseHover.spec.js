import {test,expect} from '@playwright/test'

test("MouseHover",async({page})=>{

    await page.goto("https://demo.opencart.com.gr/");

    const desktop=await page.locator("//a[normalize-space()='Desktops']");
    const mac=await page.locator("//a[normalize-space()='Mac (1)']");
    const comp=await page.locator("//a[normalize-space()='Components']");
    const printers= await page.locator("//a[normalize-space()='Printers (0)']");

    await desktop.hover();
    await mac.hover();
    await comp.hover();
    await printers.hover();

    await page.waitForTimeout(7000);

})