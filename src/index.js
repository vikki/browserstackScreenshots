var request =  require('request');

var username = process.env.BROWSERSTACK_USERNAME,
    password = process.env.BROWSERSTACK_PASSWORD,
    baseUrl  = 'http://www.browserstack.com',
    auth     =  {
                  user : username,
                  pass : password,
                  sendImmediately: false
                };

function ensureVersionSet(options) {
  options.version = options.version || "1";
}

module.exports = {
  getBrowsers : function(cb) {
    var url = baseUrl + "/screenshots/browsers.json";

    if (typeof cb !== 'function'){
       cb = function() {};
    }
    request.get(url, cb);
  },

  requestScreenshot :function(options, cb) {
    var url = baseUrl + "/screenshots/",
        req;

    ensureVersionSet(options);

    req = request.post(url, cb);
    req.auth(username, password);
    req.form().append('data', JSON.stringify(options));
  },

  getJobDetails : function(jobId, cb) {
    var url = baseUrl + "/screenshots/"+jobId+".json";

    request(url, cb);
  }
};


