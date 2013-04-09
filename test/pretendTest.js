// caution - not really a test. Actual tests need to be added posthaste. But its late :(

var browserstackScreenshots = require('../src/index.js');

var jobId = '984e2476ee88e0866003c62a318f50c47e3d9b73';

browserstackScreenshots.getJobDetails(jobId,function(error, response, body){
  console.log('yay ' + body);
});


var options = {
 url:"http://www.google.com",
 version:"1",
 browsers:[
    {
       "os":"Windows",
       "os_version":"XP",
       "browser":"ie",
       "browser_version":"7.0"
    },
    {
       "os":"Windows",
       "os_version":"XP",
       "browser":"ie",
       "browser_version":"6.0"
    }
 ]
};

/*
browserstackScreenshots.requestScreenshot(options, function(error, response, body){
  console.log('yay ' + body);
});
*/

/*
browserstackScreenshots.getBrowsers(function(error, response, body){
  console.log('yay ' + body);
});
*/
