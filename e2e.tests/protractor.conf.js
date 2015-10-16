exports.config = {
  capabilities: {
    'browserstack.user' : 'andreasbjrkblom2',
    'browserstack.key' : 'b8JVnaGmxc3pGueLumbJ',
    'browserstack.local' : 'true',
    'browserstack.debug': 'true',
    
    'browserName': 'Chrome',
    'os' : 'Windows',
    'os_version' : '8.1',
    'resolution' : '1024x768'
  },

  // Browserstack's selenium server address
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',

  // Pattern for finding test spec files
  specs: ['specs/**/*.js']
}