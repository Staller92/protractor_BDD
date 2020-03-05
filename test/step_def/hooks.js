const {After, Status} = require('cucumber');
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50 * 1000);

After(function(testCase) {
  if (testCase.result.status === Status.FAILED) {
    return browser.takeScreenshot().then((screenShot) => {
      const decodedImage = new Buffer(screenShot, 'base64');
      return this.attach(decodedImage, 'image/png');
    });
  }
});
