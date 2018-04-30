var assert = require('assert');

var Queue = require('./queue');

describe('Queue', function () {

    var myQueue;

    describe('#enqueue()', function () {

        it('should front return [test] when the [test] enqueued', function () {
            myQueue = new Queue();
            myQueue.enqueue('test');
            assert.equal(myQueue.front(), 'test');
        });

        it('should front return 0 when the 10 elements enqueued', function () {
            myQueue = new Queue();

            for (var index = 0; index < 10; index++) {
                var elem = index;
                myQueue.enqueue(elem);
            }

            assert.equal(myQueue.front(), 9);
        });
    });

    describe('#dequeue()', function () {

        it('should throws Error [Queue overflow] when dequeue empty queue', function () {
            myQueue = new Queue();
            assert.throws(myQueue.dequeue, Error, 'Queue overflow');
        });

        it('should dequeue return dequeueTest when the dequeueTest enqueueed', function () {
            myQueue = new Queue();
            myQueue.enqueue('dequeueTest');
            assert.equal(myQueue.dequeue(), 'dequeueTest');
        });

    });


    describe('#isEmpty()', function () {

        it('should return true when queue is empty', function () {
            myQueue = new Queue();
            assert.equal(myQueue.isEmpty(), true);
        });

        it('should return false when queue is not empty', function () {
            myQueue = new Queue();
            myQueue.enqueue(0);
            assert.equal(myQueue.isEmpty(), false);
        });

    });

    describe('#size()', function () {

        it('should return 0 when queue is empty', function () {
            myQueue = new Queue();
            assert.equal(myQueue.size(), 0);
        });

        it('should return 1 when queue has one item', function () {
            myQueue = new Queue();
            myQueue.enqueue(0);
            assert.equal(myQueue.size(), 1);
        });

    });

    describe('#clear()', function () {

        it('should return true when queue called clear', function () {
            myQueue = new Queue();
            myQueue.enqueue(0);
            myQueue.clear();
            assert.equal(myQueue.isEmpty(), true);
        });

        it('should return size 0 when queue called clear', function () {
            myQueue = new Queue();
            myQueue.enqueue(0);
            myQueue.clear();
            assert.equal(myQueue.size(), 0);
        });

    });


});