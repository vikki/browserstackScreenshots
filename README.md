A thin node client for [Browserstack](http://www.browserstack.com/ "Browserstack")'s new [Screenshotting service](http://www.browserstack.com/screenshots "Screenshotting service") :heart: . Very much WIP (no tests yet, etc. :()

## To use:

* Set up your username and password for browserstack as environment variables

```
	export BROWSERSTACK_PASSWORD="IMAPASSWORD"
	export BROWSERSTACK_USERNAME="HAPPYUSER"
```

* Install the module. At the moment its only on github so you can do:

```
	npm install --save git://github.com/vikki/browserstackScreenshots.git
```
* and then include it:

```
	var browserstackScreenshots = require('browserstackScreenshots');
```
* and then use it!


## API

##### List Browsers
Pass a list of available browsers, or an error if present, to cb:

	browserstackScreenshots.getBrowsers(cb)

##### Get Job Details
Pass details of a job, or an error if present, to cb:

	browserStackScreenShots.getJobDetails(jobId, cb)

##### Request a screenshot
Requests a screenshot with the given options, and then pass details of the response, or an error, if present to cb. 

	browserstackScreenshots.requestScreenshot(options, cb)

Options are passed straight through to Browserstack so if they add something, it may very well "just work" (yes, I know :P). Please refer to their docs at http://www.browserstack.com/screenshots/api#job-ids but at time of writing options are like this :

* url *String*
* version *Integer*
* browser *String*
* browser_version *String*
* os *String*
* os_version *String*
* [Optional] mac_res *String* - 1024x768, 1280x960, 1280x1024, 1600x1200, 1920x1080
* [Optional] win_res *String* - 1024x768, 1280x1024
* [Optional] quality *String* - Original, Compressed

As an example, the object will look something like this : 

	{
	  url: "www.google.com",
	  version: 1,
	  callback_url: "http://staging.example.com",
	  win_res: "1024x768",
	  mac_res: "1920x1080",
	  quality: "compressed",
	  browsers:[{
	    os:"Windows",
	    os_version:"XP",
	    browser:"ie",
	    browser_version:"7.0"
	  },
	  {
	    os:"Windows",
	    os_version:"7",
	    browser:"ie",
	    browser_version:"8.0"
	  }]
	}

To Do:

- [ ] Validation / Error handling
- [ ] Tests #TDDFail
- [ ] Add a filter on the getBrowsers stuff, to make it shinier, and to be possible to be used in the screenshot request.
  i.e. some syntactic sugar so you can say get me the newest chrome, or test on all IE versions, etc. 
