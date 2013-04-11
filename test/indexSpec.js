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
        browserstackScreenshots;

	beforeEach(function() {
		var requestStub;

		sandbox = sinon.sandbox.create();

		requestStub = {
			get: sinon.stub(request, 'get').callsArg(1)
		};

		browserstackScreenshots = proxyquire('../src/index.js', { 'request': requestStub });

	});

	afterEach(function() {
		sandbox.restore();
	});

	it('get browsers should request stuff from the api', function(){
		var callbackSpy = sinon.spy();

		browserstackScreenshots.getBrowsers(callbackSpy);

		callbackSpy.should.have.been.called;
	});
});