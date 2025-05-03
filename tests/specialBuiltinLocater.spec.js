/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    //page.getByAltText() to locate an element, usually image, by its text alternative(alt attribute).
    const logo =await page.getByAltText("company-branding"); 
    await expect(logo).toBeVisible();
    
    //page.getByPlaceholder() to locate an input textbox by placeholder attribute.
    await page.getByPlaceholder("Username").fill('Admin');
    await page.getByPlaceholder("Password").fill('admin123');

    //page.getByRole() to locate by explicit and implicit accessibility attributes.
      //await page.getByRole('link',{name:' Login '});
      //await page.getByRole('select',{name:' Login '});
      await page.getByRole('button',{name:' Login '});

    //page.getByText() to locate by text content.
    const profile = await page.locator("//*[@class='oxd-userdropdown-name']").textContent();
    const profiletxt = await page.getByText(profile);
    page.expect(profiletxt).toBeVisible();

    //page.getByLabel() to locate a form control by associated label's text
    //DOM: <label>Password <input type="password" /></label>
     await page.getByLabel('User Name').fill('John'); // find input box 


    //DOM: <span title='Issues count'>25 issues</span>
    await expect(page.getByTitle('Issues count')).toHaveText('25 issues'); //25 issues

    //DOM: <button data-testid="directions">Itinéraire</button>
    await page.getByTestId('directions').click();  //Itinéraire

    page.close();

  });