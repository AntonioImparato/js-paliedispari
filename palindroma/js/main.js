/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

'use strict';
//input cliente per inserire la parola
const parola = prompt('inserisci una parola');

//funzione per invetire la stringa 
function palindroma(invertiParola) {
    let caratteri = invertiParola.split('');
    const parolaInvertita = caratteri.reverse().join('');
    return parolaInvertita;
}
//invocare funzione 
const parolaInvertita = palindroma(parola);

//controllo delle due stringhe
if (parolaInvertita === parola) {
    console.log('la parola è palindroma');
}
else {
    console.log('la parola non è palindroma');
}
