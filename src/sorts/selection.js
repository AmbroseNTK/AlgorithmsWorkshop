const SelectionSort = function () { }

SelectionSort.prototype.sort = function (input, comparison) {
    for (let i = 0; i < input.length - 1; i++) {
        let selection = i;
        for (let j = i + 1; j < input.length; j++) {
            if (comparison(input[selection], input[j]) > 0) {
                selection = j;
            }
        }
        let temp = input[i];
        input[i] = input[selection];
        input[selection] = temp;
    }
}

module.exports = { constructor: SelectionSort };