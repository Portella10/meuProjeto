const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wm3avt",
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});
