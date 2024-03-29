const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
  env:{
    url_home:"https://naveenautomationlabs.com/opencart/",
    url_register:"https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    url_login:"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    url_opencart_contact:"https://www.automationpractice.pl/index.php?controller=contact"
  },
  watchForFileChanges: true,
  screenshotOnRunFailure: true
  
});
