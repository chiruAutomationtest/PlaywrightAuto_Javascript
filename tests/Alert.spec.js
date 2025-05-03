
const {expect , test} = require("@playwright/test");
const exp = require("constants");
//playwright bydefault handle the alert's but to validate the alerts dialog we need to register 

test.skip("Alert handle", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //enable dialog window handler { alert window }
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(3000);
});

test.skip("Confirm Alert handle ", async({page})=>
    {
    
        await page.goto("https://testautomationpractice.blogspot.com/");
    
        //enable confirm dialog window handler { alert window }
        page.on('dialog', async dialog =>{
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!')
            await dialog.accept(); // Ok Button press
            //await dialog.dismiss(); // cancel button press
        })
    
        await page.locator("//button[@id='confirmBtn']").click();
        await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")
        //const msgok = await page.locator("//p[@id='demo']").textContent();
        
        await page.waitForTimeout(3000);
    });
 
test("prompt Alert handle ", async({page})=>
    {
        
            await page.goto("https://testautomationpractice.blogspot.com/");
        
            //enable prompt dialog window handler { alert window }
            page.on('dialog', async dialog =>{
                expect(dialog.type()).toContain('prompt')
                expect(dialog.message()).toContain('Please enter your name:')
                expect(dialog.defaultValue()).toContain('Harry Potter'); //using defaultValue() >> check inner text of input box
                await dialog.accept('John'); // press ok button with enter  value
                //await dialog.accept(); // Ok Button press
                //await dialog.dismiss(); // cancel button press
            })
        
            await page.locator("//button[@id='promptBtn']").click();
            await expect(page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?")
            //const msgok = await page.locator("//p[@id='demo']").textContent();
            
            await page.waitForTimeout(3000);
    });