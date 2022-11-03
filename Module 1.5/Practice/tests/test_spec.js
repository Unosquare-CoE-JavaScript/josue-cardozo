const expect = require('chai').expect;

describe('test_suite1', function() {
    before('setup code', function() {
        console.log('Setup code');
    });

    after('teardown code', function() {
        console.log('Teardown code');
    });

    beforeEach('setup for each test code', function() {
        console.log('Setup code');
    });

    afterEach('teardown for each test code', function() {
        console.log('Teardown code for each test code');
    });

    it('test1', function() {
        console.log('test1');
        expect(true).to.equal(true);
    });

    it('test2', function() {
        console.log('test2');
        expect(true).to.equal(true);
    });
});
