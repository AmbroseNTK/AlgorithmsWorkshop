
const BubbleSort = function () {

}

BubbleSort.prototype.sort = function (input, comparison) {
    for (let i = 0; i < input.length; i++) {
        for (let j = input.length - 1; j > i; j--) {
            if (comparison(input[i], input[j]) > 0) {
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
}

module.exports = { constructor: BubbleSort };
