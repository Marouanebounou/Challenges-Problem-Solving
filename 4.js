const prompt = require("prompt-sync")()

/*
Ask the user for n → how many numbers they will enter.

Create an empty array table and a counter counter = 0.

Use a loop to fill the array with n numbers from the user.

Loop through the array again:

If the current number is negative, stop (break).

Otherwise, add it to counter.

Finally, print the sum (console.log(counter)).
*/
let n = Number(prompt("Entrez un number: "))
let table = [n]
let counter = 0
for (let index = 0; index < n; index++) {
    table[index] = Number(prompt("Entrez number " + (index + 1) +" : "));
}

for (let index = 0; index < n; index++) {
    if(!table[index] > 0)
        break
    counter += table[index]
}
console.log(counter);