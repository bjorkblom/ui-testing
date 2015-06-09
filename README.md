# ui-testing
UI-Testing

#Client unitesting:
## Install Karma:
```$ npm install karma --save```

## Install plugins that your project needs:
```$ npm install karma-jasmine karma-chrome-launcher --save```

## Install Angular mocks
```$ bower install angular-mocks -save```

##Run tests
grunt karma

#E2E testing
```$ node node_modules/protractor/bin/webdriver-manager update```
```$ webdriver-manager start```