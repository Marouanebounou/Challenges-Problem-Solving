/**
 Ask the user to enter a word and store it in word.

Define a function letterCounter(word) that counts vowels in the word.

Inside the function, define a string vowels = "aeuoi" containing all vowels.

Initialize a counter to 0.

Loop through each letter of the word (converted to lowercase).

If the letter is a vowel, increase the counter by 1.

Return the total count of vowels.

Call the function with the user’s word and print the result.
 */


const prompt = require("prompt-sync")()

let word = prompt("Entrez un mot: ")

function letterCounter(word){
    let vowels = "aeuoi"
    let counter = 0
    for(let i of word.toLowerCase()){
        if (vowels.includes(i)) {
            counter++
        }
    }
    return counter
}

console.log(letterCounter(word));

