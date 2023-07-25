<h1>NAGP Cypress Automation Framework</h1>

<h1> Pre-requisites: </h1>
 ## install visual studio code
 "https://code.visualstudio.com/"

 ## install node js
 https://nodejs.org/en/download/
 Type npm -version to check the successful installation

 ## install cucumber-json-formatter
 https://github.com/cucumber/json-formatter

 ## install the dependency
 npm install --> It will install all project dependencies mentioned in the package.json file.


<h2> Run the Test </h2>
 npm run test --> it will execute all the feature files mentioned in the specpattern variable of cypress.config.js and will create a html report in folder cypress/html-report
 To run only regression/anyother specific tag test case. Three ways to run

   1) Update the "TAGS" variable  in the cypress.config.js file and run "npm run test"
   2) Update  your tag in "tags-specific-run" script in package.json and call this in the "test" script of the same file.
      "scripts": {
               "full-suite": "cypress run",
               "tags-specific-run":"cypress run --env tags=\"@yourTag\"",
               "pretest": "rm -R -f cypress/html-report",
              "test":"npm run tags-specific-run || npm run posttest",
              "posttest": "node cucumber-html-report.js"
       }

      Now run the command npm run test   ->it will execute and will generate the report as well.
   3) npx cypress run --env tags='@regression'     -->You can update the tag name with @regression which you want to use
     node cucumber-html-report.js                 --> It will generate the html report
<h2> Report </h2>
 Report will show total test cases execution count,pass count,fail count and will attach the screenshot to the failed test cases

<h1> Framework <h1>
- Technology used in the project: Cypress, javascript,cucumber
  - e2e: 
        - this folder includes feature files, step definition,hooks and page class object.
  - fixtures: Added the test data for Web UI and API test cases. You can add more test data here and use it using cy.fixture('nameoffile)
  - html-report: After executing of all the scenarios , report will be generated in cypress/html-report
  - screenshots:Screenshot of failed test cases will be added here
  - support: We can add customized command in command.js. Added customized login command to login to the application
- cucmber-html-report.js: In this javascript file we are reading the json file created by cypress and creating a html file from that.
- cypress.config.js: this is configuration file where we can mention our configuration related data of the test cases. We can add environment variable as well.
- cypress.env.json: Used to set the environment variable and we can use these at run time.