
const { expect , test} = require("@playwright/test");

test('home page',async ({page}) =>
{
await page.goto("https://demoblaze.com/");

const pageTitle = page.title();
console.log('page title is:' , pageTitle);

await expect(page).toHaveTitle('STORE');

const pageURL = await page.url();
console.log('page url',pageURL);

await expect(page).toHaveURL('https://demoblaze.com/');

await page.close();

})
