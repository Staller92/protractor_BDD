const log4js = require('log4js');
log4js.configure({
  appenders: {fileLogger: {type: 'file', filename: 'log.log'}},
  categories: {default: {appenders: ['fileLogger'], level: 'debug'}},
});

const logger = log4js.getLogger('fileLogger');

module.exports = {
  logger,
}
