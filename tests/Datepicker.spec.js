
const { expect, test } = require("@playwright/test");

test('Handle date', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //1. direct way using fill 
    //await page.locator("//input[@id='datepicker']").fill("03/24/2025")

    // 2. approach 

    const month = "April" 
    const year  = "2026"
    const date = "20"

    await page.locator("//input[@id='datepicker']").click() //open date
    
    
    while(true){

        const monthlocater = await page.locator("//span[@class='ui-datepicker-month']").textContent()
        console.log(monthlocater)
        const yearlocater = await page.locator("//span[@class='ui-datepicker-year']").textContent()
        console.log(yearlocater)

        if(yearlocater == year && monthlocater == month )
        {
            
            // if condition is matched come out of while loop
            break; 
        }


        await page.locator("//a[@data-handler='next']//span").click()


        await page.waitForTimeout(3000);

        //to click the date using for loop
        /*const datelocater=await page.$$("//table[@class='ui-datepicker-calendar']//tbody//tr//td//a")

        for(const data of datelocater){
               if(await data.textContent() == data){
                await data.click();
               }
        }*/

       //direct way to select date        
       await page.locator(`//a[@class="ui-state-default"][text()='date']`) // date is an variable
    } 


    
});