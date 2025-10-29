const prompt = require("prompt-sync")()

/*

declare variables 
create a loop to fill the table
create a loop to fill the new table 
if the item is not in the new table 
    add it
console the newTable
*/
let n = Number(prompt("Entrez un number: "))
let table = [n]
let newTable = []
for (let index = 0; index < n; index++) {
    table[index] = Number(prompt("Entrez number " + (index + 1) +" : "));
}

for (let index = 0; index < n; index++) {
    if (!newTable.includes(table[index])) {
        newTable.push(table[index])
    }
}

console.log(newTable);
