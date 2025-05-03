
// note if we have ctrl+a we need to press and tab button then we can use press & down

const {expect , test} = require('@playwright/test');

test('Keyboard action', async({page}) =>{
    page.goto("https://gotranscript.com/text-compare")
    const text = await page.locator("//*[@name='text1']");
    await page.fill("//*[@name='text1']",'ASDFG')

    //ctrl+A -- select the text
    await page.keyboard.press('Control+A') // press => key down and ctrl+A and key up
   
    //ctrl+C -- copy the text
    await page.keyboard.press('Control+C')
   
    //Tab -- tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //ctrl+V -- paste
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);

    await page.close();
});