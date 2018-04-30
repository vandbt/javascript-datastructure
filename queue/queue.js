function Queue() {
    this.items = [];
    this.enqueue;
    this.dequeue;
    this.front;
    this.size;
    this.isEmpty;
    this.clear;
}

Queue.prototype.enqueue = function (element) {
    this.items.push(element);
};

Queue.prototype.dequeue = function () {
    if (this.isEmpty()) {
        throw 'Queue is empty.';
    } else {
        // NOTE: does not use Array built in method shift/unshift becuase that works like queue.
        return this.items.splice(0, 1);
    }
};

Queue.prototype.front = function () {
    if (this.isEmpty()) {
        throw 'Queue is empty.';
    } else {
        return this.items[0];
    }
};

Queue.prototype.size = function () {
    return this.items.length;
};

Queue.prototype.isEmpty = function () {
    return this.size() === 0 ? true : false;
};

Queue.prototype.clear = function () {
    if (!this.isEmpty()) {
        this.items = [];
    }
};


module.exports = Queue;