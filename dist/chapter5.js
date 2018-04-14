"use strict";
exports.sum = (x, y) => x + y;
exports.sumStr = (x, y) => x + y;
exports.sumAndLog = (x, y) => {
    console.log(`${x}+${y}=${x + y}`);
    return x + y;
};
exports.average = arr => arr.reduce(exports.sum, 0) / arr.length;
exports.average2 = (sum, val, ind, arr) => {
    sum += val;
    return ind == arr.length - 1 ? sum / arr.length : sum;
};
const objReducer = (ac, val) => ({
    sum: val + ac.sum,
    count: ac.count + 1
});
exports.average3 = arr => {
    const sc = arr.reduce(objReducer, { sum: 0, count: 0 });
    return sc.sum / sc.count;
};
exports.reverseString = str => {
    let arr = str.split('');
    arr.reverse();
    return arr.join("");
};
exports.reverseString2 = str => str.split("").reduceRight(exports.sumStr, "");
