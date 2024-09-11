const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: 'ReplaceUserNameVariable!!@Cypress.Config.js',
    password: 'Replace this variables with your user and pwd when testing'
  },
});
