const { expect , test} = require("@playwright/test");

test('handle dropdowns ',async ({page}) =>
{
   await page.goto("https://demo.automationtesting.in/Register.html");

   /*
   //multiple way to select option from the dropdown when we have select tag
    await page.locator("//select[@id='Skills']").selectOption({label:'Analytics'}); // using lable keyword
    await page.locator("//select[@id='Skills']").selectOption({value:'Android'}); // select by value
    await page.locator("//select[@id='Skills']").selectOption({index : 3}); // select by index
    await page.locator("//select[@id='Skills']").selectOption('Android'); //visisble text
    await page.selectOption("//select[@id='Skills']","Android");
   */

    //Assertion 
    // 1 . check no of options in an dropdown - approach 1
   /* const drpdwnvariable = await page.locator("//select[@id='Skills']//option");
    await expect(drpdwnvariable).toHaveCount(78); 

    //2 .check no of options in an dropdown - approach 2
    const drpdwnarray = await page.$$("//select[@id='Skills']//option");
    console.log('lenght of an array',drpdwnarray.length);
    await expect(drpdwnarray.length).toBe(78); 

    //check presence of value in dropdown -- approach 1
    const dropdownvariable = await page.locator("//select[@id='Skills']").textContent();
    await expect(dropdownvariable.includes('Android')).toBeTruthy();

    //check presence of value in dropdown using for loop and array -- approach 2 
    const dropdownsarray = await page.$$("//select[@id='Skills']//option")
    let status = false;
    for(const dropdown of dropdownsarray){
        let value=await dropdown.textContent(); //capture innertext
        if(value.includes('Android')){
           status=true;
           break;
        }
    }

    await expect(status).toBeTruthy() */

    const dropdownsarray = await page.$$("//select[@id='Skills']//option")
    
    for(const dropdown of dropdownsarray){
        let value=await dropdown.textContent(); //capture innertext
        if(value.includes('Android')){
           page.selectOption("//select[@id='Skills']",value);
           console.log('select value from dropdown',value);
           break;
        }
    }
    await page.waitForTimeout(5000);
});