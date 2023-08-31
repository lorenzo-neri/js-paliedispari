/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/

//PARI E DISPARI
//far scegliere pari o dispari
/* const userChoice = (prompt('Pari o dispari?')).toLowerCase();
if(userChoice != 'pari' && userChoice != 'dispari'){
    alert('Si prega di scegliere tra pari o dispari');
    location.reload(userChoice);
}

console.log(userChoice);

//far inserire un numero da 1 a 5
const userNumber = Number(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

//generare un numero da 1 a 5 per il computer, con una funzione
function numberGenerator() {
    return Math.floor((Math.random() * 5) + 1);
}

//sommare i numeri 
const sum = userNumber + (numberGenerator());
const cpuNumber = sum - userNumber       //facoltativo
console.log(cpuNumber);       //facoltativo
console.log(sum);

//stabilire se la somma dei due numeri è pari o dispari, con una funzione
function isEven(number) {
    return number % 2 === 0;
}

//dichiarare chi ha vinto
if (isEven(sum) && userChoice === 'pari') {
    console.log('La somma è pari!! Hai vinto!!😃');
} else if (isEven(sum) && userChoice !== 'pari') {
    console.log('La somma è pari!! Hai perso!!😔');
} else if (!isEven(sum) && userChoice === 'dispari') {
    console.log('La somma è dispari! Hai vinto!!😃');
} else if (!isEven(sum) && userChoice !== 'dispari') {
    console.log('La somma è dispari! Hai perso!!😔');
} */

//PALINDROMA
//chiedo parola all'utente
const userWord = prompt('Scrivi una parola e ti dirò se è palindroma');

//divido la parola
const dividedWord = userWord.split('');
console.log(dividedWord);

//inverto la parola scomposta
reverseDivideWord = dividedWord.reverse();
console.log(reverseDivideWord);

//unisco le lettere della parola scomposta
const invertedWord = reverseDivideWord.join('');
console.log(invertedWord);

if (userWord == invertedWord) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

//funzione per capire se la parola inserita è palindroma




