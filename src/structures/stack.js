const LinkedList = require('./linked_list.js');

const Stack = function () {
    this.data = new LinkedList.constructor();
}

Stack.prototype.push = function (data) {
    this.data.addFirst(data);
}

Stack.prototype.pop = function () {
    let top = this.data.head;
    if (top != undefined) {
        this.data.remove((index, data) => index == 0);
        return top.data;
    }
    return undefined;
}

Stack.prototype.peek = function () {
    return this.data.head != undefined ? this.data.head.data : undefined;
}

Stack.prototype.forEach = function (action) {
    this.data.forEach(action);
}

Stack.prototype.getSize = function () {
    return this.data.getSize();
}

module.exports = { constructor: Stack };
