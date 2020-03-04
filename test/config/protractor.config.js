const yargs = require('yargs').argv;
const path = require('path');

exports.config = {
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: yargs.browser || 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },

  specs: [path.resolve('./test/features/*.feature')],

  baseURL: 'localhost',
  directConnect: true,

  cucumberOpts: {
    'require': [path.resolve('./test/step_def/**/*.js')],
    'format': ['./node_modules/cucumber-pretty'],
    'tags': yargs.tag || '@all',
  },

  beforeLaunch: () => {
    // todo clean logs
  },

  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(2000);
    return browser.manage().window().maximize();
  },
  afterLaunch: () => {
    // todo add generate report using cucumber-html-reporter
  },
};
