
const SortAdapter = require('../structures/sort_adapter');
const Sort = require('../sorts/quick');

let adapter = new SortAdapter.constructor(new Sort.constructor());
adapter.setInput([1, 5, 4, 2, 3, 6, 2]);
adapter.sort();
console.log(adapter.getOutput());