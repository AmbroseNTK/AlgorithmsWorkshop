"use strict";

const LinkedList = require('./linked_list.js');

let list = new LinkedList.constructor();
list.addLast('a');
list.addLast('b');
list.addLast('c');
list.forEach((index, data) => console.log(data));