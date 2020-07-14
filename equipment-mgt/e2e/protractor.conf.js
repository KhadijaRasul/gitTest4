// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
// var shared = require('./shared');
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '**/*.e2e-spec.ts'  
  ],
  chromeDriver: '/usr/local/bin/chromedriver',
  capabilities: {
    'browserName': 'chrome',
    args: [
      '--window-size=2500,1600',
      '--disable-notifications',
      '--disable-infobars',
      // '--headless',
    ],
    'loggingPrefs': {
      'driver': 'ALL',
      'server': 'ALL',
      'browser': 'ALL'
    }
  },
  directConnect: true,
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 40000, // longer timeout for debugging
    includeStackTrace: true,
    stopSpecOnExpectationFailure: true,
  },
  params: {
    
      baseURL: 'https://fiixcmms-devserver.com/equipment',
      waitTime: 10000,
      defaultPageSize: "5",
      equipment:{
      equipmentName: 'UI Automation Equipment',
      equipmentMake: 'Audi',
      equipmentSerialNumber: '1234567890',
      equipmentBarcode:'AI 01 SSC US'
      },
      category:{
        categoryName: 'AutoCategory'
      }  
    
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
