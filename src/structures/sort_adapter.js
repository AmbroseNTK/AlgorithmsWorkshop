

function defaultComparison(a, b) {
    if (a > b)
        return 1;
    else if (a < b)
        return -1;
    else
        return 0;
}

const SortAdapter = function (sortAlgorithm) {
    this.algorithm = sortAlgorithm;
    this.comparison = defaultComparison;
    this.input = undefined;
    this.output = undefined;
}

SortAdapter.prototype.setAlgorithm = function (sortAlgorithm) {
    this.algorithm = sortAlgorithm;
}

SortAdapter.prototype.setInput = function (data) {
    this.input = data;
}

SortAdapter.prototype.setComparison = function (comparison) {
    this.comparison = comparison;
}

SortAdapter.prototype.getOutput = function () {
    return this.output;
}

SortAdapter.prototype.sort = function () {
    let temp = this.input;
    this.algorithm.sort(temp, this.comparison);
    this.output = temp;
}

module.exports = { constructor: SortAdapter };