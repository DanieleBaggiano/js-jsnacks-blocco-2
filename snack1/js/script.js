// Esercizio 1:
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

function rndArray(length, min, max) {
    let arrayN = [];
    for (let i = 0; i < length; i++) {
        arrayN.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arrayN;
}

const userNum = parseInt(prompt("Inserisci un numero!"));


for (let i = 0; i < userNum; i++) {
    let arrayN = rndArray(10, 1, 100);
}