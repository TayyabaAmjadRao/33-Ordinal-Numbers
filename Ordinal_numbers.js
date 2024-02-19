"use strict";
//Written by :TAYYABA RAO 
// Date: 18/feb/2024
// Roll no : 00388416
// numbers from 1 to 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using a loop.
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    let ordinalEnding;
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
