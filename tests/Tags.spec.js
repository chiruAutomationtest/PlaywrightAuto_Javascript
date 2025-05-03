const { expect , test  } = require("@playwright/test")
// npx playwright test tests/Tags.spec.js --project chromium --grep  @reg  : exe only grep tag included
// npx playwright test tests/Tags.spec.js --project chromium --grep  @reg@smoke : exe only test3 
// npx playwright test tests/Tags.spec.js --project chromium --grep  @reg  --grep-invert @smoke : exe only reg but snoke is not executed
test('test1@smoke', async({page}) =>{
 console.log("smoke")
})

test('test2@reg', async({page}) =>{
    console.log("reg")
 })

test('test3@reg@smoke', async({page}) =>{
    console.log("regsmoke")
})

test('test4@sanity', async({page}) =>{
    console.log("sanity")
}) 

