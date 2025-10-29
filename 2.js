const prompt = require("prompt-sync")()

/*

declare variables 
read the number
recrusive function 
IF number == 1
    return 1
check if number possible to devide by 3 and 5 
    Show techlead
check if number possible to devide by 3
    Show tech
check if number possible to devide by 5 
    Show lead
call same function in it self with number - 1

*/
let number = Number(prompt("Entrez un number: "))
function recrusive (number){
    if(number == 1){
        console.log(number);
        return
    }
    if(number % 3 == 0 && number % 5 == 0){
        console.log(number + " : techLead");
    }else if(number % 3 == 0){
        console.log(number + " : tech");
    }else if(number % 5 == 0){
        console.log(number + " : lead");
    }else{
        console.log(number);
    }
    recrusive(number - 1)
}

recrusive(number)

