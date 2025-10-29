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

