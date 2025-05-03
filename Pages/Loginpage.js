
exports.loginpage =
 
class loginpage{
    constructor(page){
        this.page=page;
        this.loginlink = "//a[@id='login2']"
        this.username = "//input[@id='loginusername']"
        this.password = "//input[@id='loginpassword']"
        this.loginbutton = "//button[@onclick='logIn()']"
    }

    async gotopage(){
        await this.page.goto("https://demoblaze.com/")
    }

    async login(username,password){
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginbutton).click()
        
    }
}