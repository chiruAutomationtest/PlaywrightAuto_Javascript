const { expect , test} = require("@playwright/test");

test('handle textbox and Radio Button',async ({page}) =>
{
    await page.goto("https://demo.automationtesting.in/Register.html");

    const Cricket =await page.locator("//input[@value='Cricket']");
    //input[@value="Movies "]
    const Movies= await page.locator("//input[@value='Movies']");  

    await page.locator("//input[@value='Cricket']").check();
    await expect(await page.locator("//input[@value='Cricket']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@value='Movies']").isChecked()).toBeFalsy();

    //slect multiple checkbox's

    const checkboxlocaters =["//input[@value='Cricket']","//input[@value='Movies']"];

    for(const checkbox of checkboxlocaters){ //looping all checkbox
       await page.locator(checkbox).check(); // select check box  one by one at a time 
    }

    await page.waitForTimeout(5000);

    //unselect the selected checkboks
    for(const checkbox of checkboxlocaters){ //looping all checkbox
        if(await page.locator(checkbox).isChecked){
        await page.locator(checkbox).uncheck(); // select check box  one by one at a time 
     }
    }

});