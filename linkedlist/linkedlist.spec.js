var assert = require('assert');

var LinkedList = require('./linkedlist');

describe('LinkedList', function () {
    var list;

    describe('#append()', function () {
        // before(function () {
        //     list = new LinkedList();
        // });
        beforeEach(function () {
            list = new LinkedList();
        });


        it('should return position -1 when List is empty', function () {
            assert.equal(list.indexOf('test elem'), -1);
        });

        it('should return position -1 when element no matched', function () {
            list.append('test');
            assert.equal(list.indexOf('test elem'), -1);
        });

        it('should return position 0 when element fist index matched', function () {
            list.append('first');
            assert.equal(list.indexOf('first'), 0);
        });

        it('should return position 1 when element second index matched', function () {
            list.append('first');
            list.append('second');
            assert.equal(list.indexOf('second'), 1);
        });


    });

});