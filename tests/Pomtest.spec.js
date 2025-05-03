import { expect,test } from "@playwright/test";
import { loginpage } from "../Pages/Loginpage";

test('Page of model test',async({page})=>{
    const Loginpage = new loginpage(page)
    await Loginpage.gotopage()
    await Loginpage.login('pavanol','test@123')
    await page.t
})