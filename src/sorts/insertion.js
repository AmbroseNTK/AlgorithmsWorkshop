const InsertionSort = function () { }

InsertionSort.prototype.sort = function (input, comparison) {
    for (let i = 1; i < input.length; i++) {
        let temp = input[i];
        let j = 0;
        for (j = i - 1; j > -1; j--) {
            if (comparison(temp, input[j]) < 0) {
                input[j + 1] = input[j];
            }
            else {
                break;
            }

        }
        input[j + 1] = temp;
    }
}

module.exports = { constructor: InsertionSort };