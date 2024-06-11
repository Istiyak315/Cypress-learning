const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on,config){
  on('file:preprocessor', cucumber());
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/Integration/Framework/*.js'
  },
});


//'**/*.feature'
//cypress/Integration/Test/*.js
//cypress\support
//cypress\support\pageObjects\Herouku
//cypress\Integration\Framework
//cypress\Integration\Test


