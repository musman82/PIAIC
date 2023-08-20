"use strict";
let sum = 0;
let list = [];
for (let i = 0; i < 100; i++) {
    if (i % 5 == 0) {
        sum = sum + i;
        list.push(i);
    }
}
console.log("Result: ", sum, list);
