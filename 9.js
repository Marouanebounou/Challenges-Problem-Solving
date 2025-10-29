
/**
 Ask the user to enter the number of full bottles and store it as a number.

Initialize a counter to track the total number of bottles drunk.

Define a recursive function refill(num) that simulates drinking and exchanging bottles:

Add the current number of full bottles (num) to the counter.

If num is less than 3, print the remaining bottles and stop recursion.

Otherwise, calculate how many full bottles can be obtained by exchanging empty bottles:

If divisible by 3, print how many full bottles can be exchanged.

If not divisible by 3, also show the leftover empty bottles.

Call refill() again with the new total of full bottles obtained from the exchange plus the leftover empty bottles.

Call the refill function with the initial number of bottles.

After all exchanges are done, print the total number of bottles drunk.
 */

const prompt = require("prompt-sync")()

let num = Number(prompt("Entre the number of full bottels : "))
let counter = 0
function refill(num) {
    counter += num
    if (num < 3) {
    console.log(`you have only ${num} bottels left`);
    return
    }else if (num%3 == 0) {
        console.log(`you have ${num} empty bottels You can change it with ${Math.floor(num/3)} full bottels`);
    }else{
        console.log(`you have ${num} empty bottels You can change it with ${Math.floor(num/3)} full bottels and you will have ${num%3} empty bottels.`);
    }
    refill(Math.floor(num/3) + num%3)
}
refill(num)
console.log("Total Bottels you drink: " + counter );

// console.log(Math.floor(num/3));

