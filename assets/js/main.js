/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/

//PARI E DISPARI
//far scegliere pari o dispari
const userChoice = prompt('Pari o dispari?');
console.log(userChoice);

//far inserire un numero da 1 a 5
const userNumber = Number(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

//generare un numero da 1 a 5 per il computer, con una funzione
function numberGenerator(){
    let cpuNumber = Math.floor((Math.random() * 5) + 1);
    console.log(cpuNumber);
    return cpuNumber
}

//console.log(numberGenerator());

//sommare i numeri 
const sum = userNumber + (numberGenerator());
console.log(sum);

//stabilire se la somma dei due numeri è pari o dispari, con una funzione
function decreeToEvenOrOdd() {
    if(sum % 2 === 0){
        console.log('Il risultato è pari!!');
    } else {
        console.log('Il risultato è dispari!!!');
    } return  
}

console.log(decreeToEvenOrOdd());



//dichiarare chi ha vinto
