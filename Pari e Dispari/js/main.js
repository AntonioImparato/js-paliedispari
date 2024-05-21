/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/
'use strict';

//inserimento dati e dichiarazione variabili
const sceltaUtente = parseInt(Number(prompt('Per dispari digita: 1 per pari: 2 ')));
const numero = parseInt(Number(prompt('inserisci un numero da 1 a 5')));
const dispari = 1;
const pari = 2;
let risultato = 0;

// controllo dei dati inseriti 
if (sceltaUtente < 3 && sceltaUtente > 0 && numero > 0 && numero < 6) {

    // funzione per il risultato del numero 
    function pariDispari(num) {
        const risultato = num + Math.floor(Math.random() * 5) + 1;

        return risultato;
    }

    risultato = pariDispari(numero);

    // controllo se l'utente ha vinto  con pari e dispari 
    if ((risultato % 2 == 0) && (sceltaUtente === pari)) {
        console.log('hai vinto il numero è pari');

    }
    else if (risultato % 2 !== 0 && sceltaUtente === dispari) {
        console.log('Hai vinto il numero è dipari');
    }
    else {
        console.log('non hai vinto ritenta');
    }
}

// else se i dati non sono corretti 
else {
    console.log('inserisci un valore corretto');
}