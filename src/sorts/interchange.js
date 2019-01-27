const InterchangeSort = function () {

}

InterchangeSort.prototype.sort = function (input, comparison) {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (comparison(input[i], input[j]) > 0) {
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
}

module.exports = { constructor: InterchangeSort };