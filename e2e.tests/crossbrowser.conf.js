exports.config = {
  capabilities: {
    'name' : 'Selenium Test Example',
    'build' :  '1.0',
    
    'browser_api_name' : 'MblSafari8.0', 
    'os_api_name' : 'iPadAir-iOS8Sim', 
    
    'screen_resolution' : '1024x768',
    'record_video' : "true",
    'record_network' : "false",
    'record_snapshot' :  "false",
 
    'browserName' : "safari", // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
    'username' : "xxx",
    'password' : "xxx"
  },

  // Browserstack's selenium server address
  seleniumAddress: 'http://hub.crossbrowsertesting.com:80/wd/hub',

  // Pattern for finding test spec files
  specs: ['specs/**/*.js']
}