const yargs = require('yargs').argv;
const path = require('path');
const reporter = require('cucumber-html-reporter');
const fse = require('fs-extra');

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
    'strict': true,
    'require': [path.resolve('./test/step_def/**/*.js')],
    'format': ['json:./temp/cucumber_report.json', './node_modules/cucumber-pretty'],
    'ignoreUncaughtExceptions': true,
    'tags': yargs.tag || '@all',
  },

  beforeLaunch: () => {
    fse.emptyDirSync('./temp');
  },

  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(2000);
    return browser.manage().window().maximize();
  },

  afterLaunch: () => {
    return reporter.generate({
      theme: 'bootstrap',
      jsonFile: path.resolve('./temp/cucumber_report.json'),
      output: path.resolve('./temp/cucumber_report.html'),
      reportSuiteAsScenarios: true,
      launchReport: true,
    });
  },
};
