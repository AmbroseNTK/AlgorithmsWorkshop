/**
 * Linked List
 */
const LinkedList = function () {
    this.head = undefined;
}

LinkedList.prototype.addFirst = function (data) {
    if (this.head == undefined) {
        this.head = {
            data: data,
            next: undefined
        };
    }
    else {
        this.head = {
            data: data,
            next: this.head
        }
    }
}

LinkedList.prototype.addLast = function (data) {
    if (this.head == undefined) {
        this.head = {
            data: data,
            next: undefined
        };
    }
    else {
        let current = this.head;
        while (current.next != undefined) {
            current = current.next;
        }
        current.next = {
            data: data,
            next: undefined
        }
    }
}

LinkedList.prototype.forEach = function (action) {
    let current = this.head;
    let index = 0;
    while (current != undefined) {
        action(index, current.data);
        current = current.next;
        index++;
    }
}

LinkedList.prototype.remove = function (filter) {
    let current = this.head;
    let index = 0;
    let previous = undefined;
    while (current != undefined) {
        if (previous != undefined) {
            if (filter(index, current)) {
                if (current.next != undefined) {
                    previous.next = current.next;
                }
                else {
                    previous.next = undefined;
                }
            }
            previous = current;
            current = current.next != undefined ? current.next : undefined;
            index++;
        }
        else {
            if (filter(index, current)) {
                if (current.next != undefined) {
                    this.head = current.next;
                    current = current.next;
                    index++;
                }
                else {
                    this.head = undefined;
                    current = undefined;
                }
            }
            else {
                if (current.next != undefined) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                else {
                    current = undefined;
                }

            }
        }
    }
}

LinkedList.prototype.insert = function (where, element) {
    let current = this.head;
    let index = 0;
    while (current != undefined) {
        if (where(index, current.data)) {
            if (current.next != undefined) {
                element['next'] = current.next;
                current.next = element;
            }
            else {
                current.next = element;
            }
            return;
        }
        index++;
        current = current.next != undefined ? current.next : undefined;
    }
}

LinkedList.prototype.getSize = function () {
    let current = this.head;
    let size = 0;
    while (current != undefined) {
        size++;
        current = current.next != undefined ? current.next : undefined;
    }
    return size;
}

LinkedList.prototype.collect = function (filter) {
    let result = new LinkedList();
    let current = this.head;
    let index = 0;
    while (current != undefined) {
        if (filter(index, current.data)) {
            result.addLast(current.data);
        }
        index++;
        current = current.next != undefined ? current.next : undefined;
    }
    return result;
}

let list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);

list.remove((index, data) => index == 0);
list.remove((index, data) => index == 0);

module.exports = { constructor: LinkedList };