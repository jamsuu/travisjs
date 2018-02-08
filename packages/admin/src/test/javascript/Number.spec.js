import 'chai/register-should';

describe('Number', function() {
    describe('#parse()', function() {
        it('should return a number when a valid integer is provided ', function() {
            Number.parseInt('1').should.equal(1);
        });
    });
});