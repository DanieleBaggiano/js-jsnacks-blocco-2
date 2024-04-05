// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const userWord1 = prompt("Inserisci una parola");
const userWord2 = prompt("Inserisci un'altra parola");

const printWords = lengthWords(userWord1, userWord2);