const {expect , test} = require('@playwright/test');

// we can handle frame using 
// > page.frame (name) // using name atribute
// > page.frame ({url:"https://asas.com"})
test('frames', async({page}) =>{

  await page.goto("https://ui.vision/demo/webtest/frames/");
  
  // total frames
  const Totalframes = await page.frames()
  console.log('total frames',Totalframes.length) // total frames : 7

  // approach 1: using name or url
  //page.frame("name") // by using name attribute
  const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"})
  await frame1.locator("//input[@name='mytext2']").fill("frame2...");
  // or await frame1.fill("//input[@name='mytext2']","frame2..")


  //approach 2 : using Framelocater

  await page.frameLocator("//frame[@src='frame_3.html']") //frame
                .locator("//input[@name='mytext3']")      //input box
                  .fill("frame3..")                       
  await page.waitForTimeout(5000);

  //approach 3 for nestedframes Iframes

  const frameArray= await page.frame("//frame[@src='frame_3.html']"); // return array of frames
  await frameArray[0].locator("(//*[@class='bzfPab wFGF8']//span)[1]").check() //nested frame elemet

});