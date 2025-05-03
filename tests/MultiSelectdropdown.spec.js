const { expect , test} = require("@playwright/test");

test('select multiple options from dropdown',async ({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.selectOption("//select[@id='colors']",['Red','Green','white']);

    //assertion
    //check lenght of the option in an select dropdown
    const color =await page.locator("//select[@id='colors']//option");
    await expect.soft(color).toHaveCount(7);
    
    //chck lenght of the option in an select dropdwon using js array
    const Arrcolors =await page.$$("//select[@id='colors']//option")
    console.log("lenght of an select dropdown", Arrcolors.length)
    await expect(Arrcolors.length).toBe(7);

    //check presence of value in the dropdown using textcontent
    const values = await page.locator("//select[@id='colors']").textContent();
    console.log("text contents",values);
    expect(values.includes('Blue')).toBeTruthy();
    expect(values.includes('Black')).toBeFalsy();


    await page.waitForTimeout(5000);
 
});