import {test,expect} from '@playwright/test';

test("Frames", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frames = await page.frames();
    console.log("Total no of frames",frames.length);

    //using name or url
    //using name=const frame1=await page.frame('name');
    const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.fill("//input[@name='mytext1']","Hello");

    await page.waitForTimeout(5000);

    //approach 2 using framelocator

    const inputbox=await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']");
    await inputbox.fill("Hi Akshat");

    await page.waitForTimeout(5000);




})

