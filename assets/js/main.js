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
console.log(userChoice.toLowerCase());

//far inserire un numero da 1 a 5
const userNumber = Number(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

//generare un numero da 1 a 5 per il computer, con una funzione
function numberGenerator(){
    return Math.floor((Math.random() * 5) + 1);
}

//sommare i numeri 
const sum = userNumber + (numberGenerator());
const cpuNumber = sum - userNumber
console.log(cpuNumber);
console.log(sum);

//stabilire se la somma dei due numeri è pari o dispari, con una funzione
function isEven(number) {
    return number % 2 === 0;
}

if (isEven(sum) && userChoice === 'pari'){
    console.log('La somma è pari!! Hai vinto!!😃');
} else if (isEven(sum) && userChoice !== 'pari'){
    console.log('La somma è pari!! Hai perso!!😔');
} 



//dichiarare chi ha vinto
