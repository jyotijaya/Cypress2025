const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
  env:{
    url_home:"https://naveenautomationlabs.com/opencart/",
    url_register:"https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    url_login:"https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  }
});
