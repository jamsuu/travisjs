'use strict';

var chai = require('chai');
var sinon = require('sinon');
var ApiService = require('../../main/javascript/ApiService');
var WidgetService = require('../../main/javascript/WidgetService');

chai.should();

describe('WidgetService', function () {
    describe('findAll', function () {
        it('should return a list of all widgets', function () {
            var apiService = sinon.mock(ApiService);
            var widgetService = new WidgetService(apiService);
            apiService.expect('get').returns([1, 2]);

            var widgets = widgetService.findAll();

            widgets.should.have.lengthOf(2);
        });
    });
});