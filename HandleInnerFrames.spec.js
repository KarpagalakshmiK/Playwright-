import {test,expect} from '@playwright/test';

test("HandleInnerFrames", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    

})