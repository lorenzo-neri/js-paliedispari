/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/



//PARI E DISPARI

const buttonEvenOrOddEl = document.getElementById('btn_even_odd');
const formEvenOrOdd = document.getElementById('form_even_odd');

formEvenOrOdd.addEventListener('submit', function (e) {

    //impedisco refresh pagina
    e.preventDefault();

    // ### far scegliere pari o dispari ###
    //const userChoice = (prompt('Pari o dispari?')).toLowerCase();

    const userChoice = document.getElementById('user_word').value.toLowerCase();

   /*  if (userChoice != 'pari' && userChoice != 'dispari') {
        alert('Si prega di scegliere tra pari o dispari');
        location.reload();
    } */

    console.log(userChoice);

    // ### far inserire un numero da 1 a 5 ###
    //const userNumber = Number(prompt('Scegli un numero da 1 a 5'));

    const userNumber = document.getElementById('user_number').value;
    
    /*if (userNumber != 1
        && userNumber != 2
        && userNumber != 3
        && userNumber != 4
        && userNumber != 5) {
        alert('Si prega di scegliere un numero da 1 a 5');
        location.reload(userChoice);
    }*/
    
    console.log(userNumber);

    
    //generare un numero da 1 a 5 per il computer, con una funzione
    function numberGeneratorFromOneToFive() {
        return Math.floor((Math.random() * 5) + 1);
    }

    //sommare i numeri 
    const sum = userNumber + (numberGeneratorFromOneToFive());
    let cpuNumber = sum - userNumber       //facoltativo
    console.log(cpuNumber);       //facoltativo
    let cpuNumberEl = cpuNumber(document.getElementById('cpu_number'));
    
    // ####################### unfinished ######################## //
    // ####################### unfinished ######################## //
    // ####################### unfinished ######################## //

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
})


//PALINDROMA
//chiedo parola all'utente
/* const userWord = prompt('Scrivi una parola e ti dirò se è palindroma'); */

//divido la parola
/* const dividedWord = userWord.split('');
console.log(dividedWord);

//inverto la parola scomposta
reverseDivideWord = dividedWord.reverse();
console.log(reverseDivideWord);

//unisco le lettere della parola scomposta
const invertedWord = reverseDivideWord.join('');
console.log(invertedWord);*/


//funzione per capire se la parola inserita è palindroma

/* function toReverseWord(wrd) {
    const invertedWord = wrd.split('').reverse().join('');
    return invertedWord;
}

const invertedWord = toReverseWord(userWord)

console.log(toReverseWord(userWord));

if (userWord == invertedWord) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
} */



