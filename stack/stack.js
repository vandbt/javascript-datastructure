// Stack
function Stack() {
    this.dataStore = [];

    this._top = -1;
    this.pop;
    this.push;
    this.peek;
    this.isEmpty;
    this.size;
    this.clear;
}

Stack.prototype.push = function (elem) {
    // let index = this.dataStore.length;
    this._top = this._top + 1;
    this.dataStore[this._top] = elem;
};

Stack.prototype.pop = function () {
    if (this._top === -1) {
        throw 'Stack overflow';
    } else {
        var poped = this.dataStore.splice(this._top, 1);
        //NOTE: delete could not remove array propery
        // delete this.dataStore[this._top];
        this._top = this._top - 1;
        return poped;
    }
};

Stack.prototype.peek = function () {
    return this.dataStore[this._top];
};

Stack.prototype.size = function () {
    return this._top + 1;
};

Stack.prototype.isEmpty = function () {
    return this.size() === 0 ? true : false;
};

Stack.prototype.clear = function () {
    this.dataStore = [];
    this._top = -1;
};

Stack.prototype.printStack = function () {
    for (var index = 0; index < this.dataStore.length; index++) {
        var element = this.dataStore[index];
        console.log('index %d , value %s', index, element);
    }
};

Stack.prototype.genData = function () {
    for (var index = 0; index < 10; index++) {
        var elem = Math.random();
        this.push(elem);
    }
};

module.exports = Stack;