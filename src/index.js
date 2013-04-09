var request =  require('request');

var username = "EMAIL",
    password = "PASSWORD",
    baseUrl  = 'http://www.browserstack.com',
    auth     =  {
                  user : username,
                  pass : password,
                  sendImmediately: false
                };

module.exports = {
  getBrowsers : function(cb) {
    var url = baseUrl + "/screenshots/browsers.json";

    request.get(url, cb);
  },

  requestScreenshot :function(options, cb) {
    var url = baseUrl + "/screenshots/";

    options.version = options.version || "1";

    var req = request.post(url, cb);
    req.auth(username, password);
    req.form().append('data', JSON.stringify(options));
  },

  getJobDetails : function(jobId, cb) {
    var url = baseUrl + "/screenshots/"+jobId+".json";

    request(url, cb);
  }
};


