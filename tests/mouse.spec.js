const {expect , test} = require('@playwright/test');

test.skip('mouse action', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const Name = await page.locator("//input[@placeholder='Enter Name']");
    const Wikipedia = await page.locator("//input[@class='wikipedia-search-input']")

    // //await page.locator("https://demo.opencart.com/")

    // const Desktops=await page.locator("//ul[@class='nav navbar-nav']//li//a[text()='Desktops']")

    // const pco = await page.locator("//div[@class='dropdown-inner']//ul//li//a[text()='PC (0)']")

    await Name.hover()
    await page.waitForTimeout(3000)
    await Wikipedia.hover()
    await page.waitForTimeout(3000)
});

test.skip("right click",async({page})=>{

    page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const button = await page.locator("//p//span[@class='context-menu-one btn btn-neutral']")
    
    await page.waitForTimeout(3000)
    await button.hover()
    
    //right click action
    await button.click({button :'right'});

    await page.waitForTimeout(3000);


});

test.skip("double click",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const button = await page.locator("//button[@ondblclick='myFunction1()']") 

    //double click using dnlclick()
    await  button.dblclick();

    const textbox =await page.locator("//input[@id='field2']")

    await expect(textbox).toHaveValue('Hello World!')

    await page.waitForTimeout(3000);

})

test("Drag n Drop",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

  const dragele = page.locator("//div[@id='draggable']")

  const dropele = page.locator("//div[@id='droppable']")

  //aproach 1

//   await dragele.hover() //hover on element
//   await page.mouse.down() //click 

//   await dropele.hover() //hover on elemenet
//   await page.mouse.up()

//   await page.waitForTimeout(3000)

  //aproach 2

  await dragele.dragTo(dropele) // ele1 drag to ele2
  await page.waitForTimeout(3000)

  
})