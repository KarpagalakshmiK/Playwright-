const {test,expect}=require ('@playwright/test')

test("UploadFiles",async({page})=>{

    await page.goto("https://practice.expandtesting.com/upload");

    await page.locator("#fileInput").setInputFiles("tests/uploadfiles/dog.jfif");

    await page.locator("#fileSubmit").click();

    await page.waitForSelector("//h1[text()='File Uploaded!']")

    const text=await page.locator("//h1[text()='File Uploaded!']");

    await expect(text).toHaveText("File Uploaded!")

    await page.waitForTimeout(5000);
})

test.only("MultipleFiles",async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("#filesToUpload").setInputFiles(["tests/uploadfiles/cat.jfif","tests/uploadfiles/dog.jfif"])

    expect (await page.locator("//ul[@id='fileList']//li[position()=1]")).toHaveText("cat.jfif");
    expect (await page.locator("//ul[@id='fileList']//li[position()=2]")).toHaveText("dog.jfif");

    await page.waitForTimeout(3000);

    await page.locator("#filesToUpload").setInputFiles([]);

    await page.waitForTimeout(3000);

    expect(await page.locator("//ul[@id='fileList']")).toHaveText("No Files Selected");




    await page.waitForTimeout(5000);
})