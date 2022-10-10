const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bmd3y2',
 
  defaultCommandTimeout: 6000,
  e2e: {
    baseUrl: 'https://app.vwo.com/#/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
