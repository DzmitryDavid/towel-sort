// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const resArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (matrix.indexOf(matrix[i]) % 2 !== 0) {
            resArr.push(matrix[i].reverse());
        } else {
            resArr.push(matrix[i]);
        }
    }
    return resArr.flat();
};
