'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('Number', function () {
    describe('#parse()', function () {
        it('should return a number when a valid integer is provided', function () {
            expect(Number.parseInt('1')).to.equal(1);
        });
    });
});