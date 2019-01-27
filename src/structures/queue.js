const LinkedList = require('./linked_list');

const Queue = function () {
    this.data = new LinkedList.constructor();
}

Queue.prototype.enQueue = function (data) {
    this.data.addLast(data);
}

Queue.prototype.deQueue = function () {
    let data = this.data.head;
    if (data != undefined) {
        this.data.remove((index, data) => index == 0);
        return data.data;
    }
    return undefined;
}
Queue.prototype.peek = function () {
    return this.data.head != undefined ? this.data.head.data : undefined;
}

Queue.prototype.getSize = function () {
    return this.data.getSize();
}

Queue.prototype.forEach = function (action) {
    this.data.forEach(action);
}

module.exports = { constructor: Queue };