const prompt = require("prompt-sync")()

/*

declare variables 
create a recrusive function 
if the numer is <= 2
return number
else 
return recrusive(number - 1) + recrusive (number - 2)
*/

let number = Number(prompt("Entrez un numero: "))
function recrusive(number){
    if (number <= 2)
    return number
    return recrusive(number - 1) + recrusive(number - 2)
}
console.log(recrusive(number));
