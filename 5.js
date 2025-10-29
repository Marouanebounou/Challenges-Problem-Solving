/*
Ask the user to enter a number n.

Create an array table and fill it with n numbers entered by the user.

Create a new array newTable.

First loop → copy all elements of table in order into newTable.

Second loop → copy all elements of table in reverse order into newTable.

Display (console.log) the final array
*/

const prompt = require("prompt-sync")()

let n = Number(prompt("Entrez un number: "))
let table = [n]
let newTable = []
for (let index = 0; index < n; index++) {
    table[index] = Number(prompt("Entrez number " + (index + 1) + " : "));
}

for (let index = 0; index < n; index++) {
    newTable.push(table[index])
}
for(let index = n-1 ; index >= 0 ; index--){
    newTable.push(table[index])
}

console.log(newTable);
