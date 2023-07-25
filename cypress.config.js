const { defineConfig } = require("cypress");
const preprocessor=require("@badeball/cypress-cucumber-preprocessor");
const browserify=require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}
module.exports = defineConfig({
  projectId: 'dy99zi',
  e2e: {
    setupNodeEvents,
    specPattern: ["./cypress/e2e/feature/*.feature"],
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/",
    screenshotOnRunFailure:true,
    video:false,
    screenshotsFolder:'./cypress/screenshots',
    trashAssetsBeforeRuns:true
  },
  env:{
    "TAGS":""
  }
});
