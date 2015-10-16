exports.config = {
  capabilities: {
    'browserstack.user' : 'andreasbjrkblom2',
    'browserstack.key' : 'b8JVnaGmxc3pGueLumbJ',
    'browserstack.local' : 'true',
    'browserstack.debug': 'true',
    
    'browserName' : 'android',
 'platform' : 'ANDROID',
 'device' : 'Samsung Galaxy S5'
  },

  // Browserstack's selenium server address
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',

  // Pattern for finding test spec files
  specs: ['specs/**/*.js']
}