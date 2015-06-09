// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['specs/**/*.js'],

    chromeDriver: '../node_modules/protractor/selenium/chromedriver.exe',
    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
