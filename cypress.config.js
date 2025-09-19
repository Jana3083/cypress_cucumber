const { defineConfig } = require("cypress");
//importando a biblioteca cypress-cucumber
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = defineConfig({
  e2e: {
    //habilitando a extensão de arquivos .feature
    //(arquivos de linguagem Gherkin do Cucumber)
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      //inicilizar a bilbioteca do cypress-cucumber
      on('file:preprocessor', cucumber());
    },
  },
});