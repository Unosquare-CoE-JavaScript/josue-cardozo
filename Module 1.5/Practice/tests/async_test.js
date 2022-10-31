const expect = require('chai').expect;

function myAsyncFunction(callback) {
    setTimeout(function() {
        callback('hola');
    }, 50)
}

function myPromiseFunction() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            setTimeout(function() {
                resolve('exito');
            }, 50);
        });
    });
}

it('test_async', function(done) {
    myAsyncFunction(function(str) {
        expect(str).to.equal('hola');
        done();
    })
});

it('test_promise', function() {
    return myPromiseFunction().then(function(res) {
        expect(res).to.equal('exito');
    });
});
