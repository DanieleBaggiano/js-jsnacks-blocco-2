document.getElementById("res-elem").addEventListener("click", function () {

    const elem = elemInput.value;

    const arrayElem = ["pippo", "pluto", "calzino", "padella"];

    const numElem = contaElem(arrayElem, elem);
    console.log("Numero di elementi in array:", numElem);

    arrayElem.push(elem);

    /**
     * 
     * @param {object} array 
     * @param {string} elem 
     * @returns {number}
     */
    function contaElem(array, elem) {
        let conta = array.length;
        if (elem) {
            conta++;
        }
        return conta;
    }
});