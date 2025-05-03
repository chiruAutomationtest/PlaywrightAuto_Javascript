const {expect , test, chromium} = require("@playwright/test");

// skip , skip-with condition , only , fail ,fixme ,slow

/*
test.only("Alert handle", async({page})=>{
    console.log(" test with only fun exe");
})

////////
// skip is used to skip test

test.skip("test Skip ", async ({page})=>{
    console.log("test with skip function exe");
})

test("test",async({page,browserName})=>{
    if(browserName === 'chromium'){
        test.skip();
        //console.log("test function")
   }
})

// skip and fixme are same but fixme is used when test is failed 
// due to bug so unless bug is fix then only test can exe
//fixme
test('test4',async({page})=>{
    test.fixme()
    console.log("this is test4")
})
*/

test('test5',async({page})=>{
    test.fail() //act

    console.log("this is test5")
    expect(1).toBe(1); //exp 

    //if act is test set with fail and exp assertion is true then : result is test is fail but true {Expected to fail, but passed.}
    //if act and exp both are true then : result test is pass 
    
})

test('test6',async({page,browserName})=>{
    //test.fail() //act

    if(browserName==='chromium')
    {
        test.fail() // act
    }
    console.log("this is test6")
    expect(1).toBe(2); //exp 

    //if act is test set with fail and exp assertion is false then : result is test is pass
    //if act and exp both are true then : result test is pass 
    
})

// slow is used when test exeuting is faster than expected time 
// need to slow down test
test.slow('test1@smoke', async({page}) =>{
    console.log("smoke")
})
