# ui-testing
UI-Testing

## Install plugins that your project needs:
```$ npm install```

#E2E testing
```$ node node_modules/protractor/bin/webdriver-manager update```

# Install Angular mocks
```$ bower install angular-mocks -save```

#Run tests
- Client tests: ```$ grunt client.tests.local```
- Client tests on browserstack: ```$ grunt client.tests.browserstack```
- Client tests on crossbrowser: ```$ grunt client.tests.crossbrowser```
- E2E tests: ```$ grunt e2e.tests```
- UI tests: ```$ grunt ui.tests```