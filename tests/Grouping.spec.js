const {expect , test} = require('@playwright/test');

test.beforeEach(async()=>{
    console.log("before Each step..")
})
test.afterEach(async()=>{
    console.log("after each step...")
})
test.afterAll(async()=>{
    console.log("after All step...")
})
test.beforeAll(async()=>{
    console.log("before All step...")
})
test.describe('Grouping1',()=>{

    test('step1', async({page}) =>{
        console.log("step1.....")
    })

    test('step2', async({page}) =>{
        console.log("step2.....")
    })

});

test.describe('Grouping2',() =>{
    test('step3', async({page}) =>{
        console.log("step3.....")
    })

    test('step4', async({page}) =>{
        console.log("step4.....")
    })
});

