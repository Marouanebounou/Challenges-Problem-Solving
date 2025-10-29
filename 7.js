
/**
Ask the user to enter a word and store it in word.

Check if the first letter (word[0]) is the same as the last letter (word[word.length - 1]).

If they are the same, print "True".

Otherwise, print "False".
 */

const prompt = require("prompt-sync")()

let word = prompt("Entrez un mot: ")

if(word[0] === word[word.length - 1]){
    console.log("True");
}else{
    console.log("False");
}