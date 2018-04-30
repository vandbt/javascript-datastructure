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


    describe('#isEmpty()', function () {

        it('should return true when stack is empty', function () {
            myStack = new Stack();
            assert.equal(myStack.isEmpty(), true);
        });

        it('should return false when stack is not empty', function () {
            myStack = new Stack();
            myStack.push(0);
            assert.equal(myStack.isEmpty(), false);
        });
        
    });

    describe('#size()', function () {

        it('should return 0 when stack is empty', function () {
            myStack = new Stack();
            assert.equal(myStack.size(), 0);
        });

        it('should return 1 when stack has one item', function () {
            myStack = new Stack();
            myStack.push(0);
            assert.equal(myStack.size(), 1);
        });
        
    });

    describe('#clear()', function () {

        it('should return true when stack called clear', function () {
            myStack = new Stack();
            myStack.push(0);
            myStack.clear();
            assert.equal(myStack.isEmpty(), true);
        });

        it('should return size 0 when stack called clear', function () {
            myStack = new Stack();
            myStack.push(0);
            myStack.clear();
            assert.equal(myStack.size(), 0);
        });
        
    });


});