const {expect , test} = require("@playwright/test");

test('Handle Bootstrap Dropdown',async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator("//div[@class='btn-group']").click() // click on dropdown

    //1
    const boostdrp = await page.locator("//ul[@class='multiselect-container dropdown-menu']//li//a//label//input")
    await expect(boostdrp).toHaveCount(11);

    //2 using an array
    const boostdrparray = await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label//input")
    await expect(boostdrparray.length).toBe(11);
    
    //3 using for loop print options
    const boostdrparrayoption = await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label[@class='checkbox']")
    for(let options of boostdrparrayoption){
        const txtvalue =await options.textContent();
        console.log('value is',txtvalue);
    }

    //4 select options from dropdown
    const selectoptions = await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label[@class='checkbox']")
    for(let options of selectoptions){
        const txtvalue =await options.textContent();
        if(txtvalue.includes('Java') || txtvalue.includes('Python'))
        {
            await options.click(); // click option

        }          
    }

    //5 un-select dropdown value from dropdown
    const selectoptionss = await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label[@class='checkbox']")
    for(let options of selectoptionss){
        const txtvalue =await options.textContent();
        if(txtvalue.includes('HTML') || txtvalue.includes('CSS'))
        {
            await options.click(); // click //unselect the selected option
            
        }          
    }

    await page.waitForTimeout(5000);
});