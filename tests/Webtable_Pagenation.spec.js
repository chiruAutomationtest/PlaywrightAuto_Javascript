
const { expect, test } = require("@playwright/test");
const exp = require("node:constants");

test('Handle ', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000);

    const tableEle = await page.locator("//table[@id='productTable']");

    // 1. total number of rows and columns
    const columes = await tableEle.locator("//thead//tr//th")
    console.log("number of columes",await columes.count())
    expect(await columes.count()).toBe(4)

    const rows = await tableEle.locator("//tbody//tr") // print row from page1
    //const rows = await tableEle.locator("//tbody//tr//td") //print rows from page 1 to nth page 
    console.log("total rows count",await rows.count())
    expect(await rows.count()).toBe(5)


    // 2. select value from table using filters

    // get row ,the row which as product 4
    const matchedRow = rows.filter({
      has : page.locator("//td") , // get all values from rows  
      hasText : 'Smartwatch'    // check table row has particular value    
    })
    matchedRow.locator("//input").check(); // click on checkbox locater{input} at matched row
    
    await page.waitForTimeout(5000);

    //3. reuseable function for multiple selection of product
    await selectproduts(rows,page,'Laptop')
    await selectproduts(rows,page,'Smartphone')
    await selectproduts(rows,page,'Wireless Earbuds')

   
});

async function selectproduts(rows,page,nameofproduct){
    const matchedRow = rows.filter({
      has : page.locator("//td") ,   
      hasText : nameofproduct    
    })
   await matchedRow.locator("//input").check(); // click on checkbox locater{input} at matched row
}

// pending from video 40.2 https://www.youtube.com/watch?v=w7ZR_Q1npN4&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=21

//due to java script function not understand