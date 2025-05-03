// There is another way to inspect elements in the hidden dropdown by following these steps 
// 1- Open developer tool.
// 2- From the right panel, go to ‘Event Listeners’ tab.
// 2- Look for ‘blur’ property.
// 3- Click on ‘Remove’ button next each property values to remove it.
// 4- Try to inspect the drop-down values again.

const { expect , test  } = require("@playwright/test")

test('Hidden dropdown ' , async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.locator("//div//input[@name='username']").fill("Admin");
    await page.locator("//div//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click()

    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click()
    await page.locator("//label[contains(text(),'Job Title')]/ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//div[@class='oxd-select-text--after']").click();

    await page.waitForTimeout(3000)
    const HiddenDropdownoptions = await page.$$("//div[@role='option']//span")
    for(let options of HiddenDropdownoptions){
        const JobTitle = await options.textContent();
        console.log(text);
        if(JobTitle.includes('QA Engineer')){
           await options.click();   
        }
    }

});