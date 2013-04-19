// dev deps
var sinon      = require('sinon'),
    chai       = require('chai'),
    sinonChai  = require('sinon-chai'),
    should     = chai.should(),
    proxyquire = require('proxyquire').noCallThru();

// module deps
var request = require('request');

chai.use(sinonChai);

describe('browserstackScreenshots', function(){
	'use strict';

	var sandbox,
        browserstackScreenshots,
        mockGetBrowsersResponse = {},
        mockRequestScreenshotResponse = {},
        authSpy = sinon.spy(),
        formSpy = sinon.spy(),
        getSpy = sinon.stub(request, 'get').callsArgWith(1, mockGetBrowsersResponse);


	before(function() {
		var requestStub;

		requestStub = {
			get: getSpy,
			post: sinon.stub(request, 'post').callsArgWith(1, mockRequestScreenshotResponse),
			form: formSpy,
			auth: authSpy
		};

		browserstackScreenshots = proxyquire('../src/index.js', { 'request': requestStub });
	});

	beforeEach(function() {
		sandbox = sinon.sandbox.create();
	});

	afterEach(function() {
		sandbox.restore();
	});

	it('getBrowsers should request browsers.json', function(){
		browserstackScreenshots.getBrowsers();

		getSpy.should.have.been.calledWith('http://www.browserstack.com/screenshots/browsers.json');
	});

	it('getBrowsers handle there being no success callback', function(){
		browserstackScreenshots.getBrowsers();
	});

		it('getBrowsers should pass output to the callback', function(){
		var callbackSpy = sinon.spy();

		browserstackScreenshots.getBrowsers(callbackSpy);

		callbackSpy.should.have.been.calledWith(mockGetBrowsersResponse);
		getSpy.should.have.been.called;
	});

});