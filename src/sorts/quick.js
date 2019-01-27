const Stack = require('../structures/stack');

const QuickSort = function () {

}

QuickSort.prototype.sort = function (input, comparison) {
    let stack = new Stack.constructor();
    let l = 0;
    let h = input.length - 1;
    stack.push(l);
    stack.push(h);
    while (stack.getSize() > 0) {
        h = stack.pop();
        l = stack.pop();
        let p = partition(input, comparison, l, h);
        if (p - 1 > l) {
            stack.push(l);
            stack.push(p - 1);
        }
        if (p + 1 < h) {
            stack.push(p + 1);
            stack.push(h);
        }
    }
}

function swap(input, x, y) {
    let temp = input[x];
    input[x] = input[y];
    input[y] = temp;
}

function partition(input, comparison, l, r) {
    let x = input[r];
    let i = l - 1;
    for (let j = l; j <= r - 1; j++) {
        if (comparison(x, input[j]) > 0) {
            i++;
            swap(input, i, j);
        }
    }
    swap(input, i + 1, r);
    return i + 1;
}

module.exports = { constructor: QuickSort };