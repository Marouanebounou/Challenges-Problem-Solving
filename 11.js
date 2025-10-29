/**
 Create an array table containing a sequence of numbers.

Start looping through the array using the index i.

For each element, check if its value is equal to i + 1 (the expected sequential number).

If the value does not match the expected number, print the missing number (i + 1).

Stop the loop immediately after finding the first missing number.
 */

let table = [1,2,4,5,6,7,8,9]

for (let i = 0; i < table.length; i++) {
    if (!(table[i] === (i+1))) {
        console.log(i+1);
        break
    }
}