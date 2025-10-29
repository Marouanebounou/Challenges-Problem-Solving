/*
Ask the user to enter a word and store it in word.

Create an empty object table to store letter counts.

Loop through each letter of the word.

Count how many times that letter appears in the word.

Store the letter and its count in table.

Display the final object showing each letter’s frequency.

*/


const prompt = require("prompt-sync")()

let word = prompt("Entrez un mot: ")
let table = {}

for (let index = 0; index < word.length; index++) {
    let letter = word.charAt(index)
    let counter = 0
    for(let j = 0 ; j < word.length ; j++){
        if(letter === word[j]){
            counter++
        }
    }
    table[letter] = counter
}

console.log(table);

