"use strict";
const chap5 = require("./chapter5");
/*
    Chapter 5 descirption
*/
const myArray = [22, 9, 60, 12, 4, 56];
// console.log(myArray.reduce(chap5.sum,0));
// console.log(myArray.reduce(chap5.sumAndLog,0));
// console.log(chap5.average(myArray));
// console.log(myArray.average());
// console.log(chap5.average3(myArray));
// console.log(chap5.reverseString2("alec"));
const markers = [
    { name: "AR", lat: -4.9, lon: -56.2 },
    { name: "BR", lat: 16.9, lon: -15.2 },
    { name: "BO", lat: 25.9, lon: 12.2 },
    { name: "UY", lat: 34.9, lon: -24.2 },
    { name: "UY", lat: -34.9, lon: -24.2 }
];
let averageLat2 = chap5.average(markers.map(x => x.lat));
let averageLon2 = chap5.average(markers.map(x => x.lon));
console.log(averageLat2);
console.log(averageLon2);
