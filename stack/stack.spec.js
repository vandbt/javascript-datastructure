var assert = require('assert');

var Stack = require('./stack');

describe('Stack', function () {

    var myStack;

    describe('#push()', function () {

        it('should peek return test when the test pushed', function () {
            myStack = new Stack();
            myStack.push('test');
            assert.equal(myStack.peek(), 'test');
        });

        it('should return 9 when the 10 elements pushed', function () {
            myStack = new Stack();

            for (var index = 0; index < 10; index++) {
                var elem = index;
                myStack.push(elem);
            }

            assert.equal(myStack.peek(), 9);
        });
    });


    describe('#pop()', function () {

        it('should throws Error [Stack overflow] when pop empty stack', function () {
            myStack = new Stack();
            assert.throws(myStack.pop, Error, 'Stack overflow');
        });

        it('should pop return popTest when the popTest pushed', function () {
            myStack = new Stack();
            myStack.push('popTest');
            assert.equal(myStack.pop(), 'popTest');
        });
        
    });
});