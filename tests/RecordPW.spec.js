const { chromium } = require("@playwright/test")
const { connected } = require("process")

// we wright code in 2 ways 
 1. writing code using script 
 2. recording appication and generate code 

 npx playwright codegen
 npx playwright codegen --help 
 npx playwright codegen --output tests/demotest.spec.js {script is recorded and stored in tests folder}
 npx playwright codegen --target javascript {record script in javascript lang.}
 npx playwright codegen --browser chromium {reecord script in chrome}
 npx playwright codegen --device "iphone12" {useing mobile device record script}
 npx playwright codegen --viewport-size "1280,720" {used for chrome screen size }
 2: steps:
 1. open new terminal
 2. npx playwright codegen > open browser search for www.orangehrm.com && playwright spec 
 3. record action in appication is store as the script && stop playwright inspecter
 4. create a new file and copy paste the code
