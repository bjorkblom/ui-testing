# ui-testing
UI-Testing

#Client unit testing:
## Install Karma:
```$ npm install karma --save```

## Install plugins that your project needs:
```$ npm install karma-jasmine karma-chrome-launcher --save```

#E2E testing
```$ node node_modules/protractor/bin/webdriver-manager update```

# Install Angular mocks
```$ bower install angular-mocks -save```

#Run tests
Client tests: ```$ grunt client.tests```
E2E tests: ```$ grunt e2e.tests```
UI tests: ```$ grunt ui.tests```