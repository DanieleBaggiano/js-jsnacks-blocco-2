document.getElementById("cerca-btn").addEventListener("click", function() {

    const elem = elemInput.value;

    const arrayElem = ["pippo", "pluto", "calzino", "padella"];

    /**
     * 
     * @param {object} array 
     * @param {string} elemento 
     * @returns {number}
     */
    function trovaIndice(array, elemento) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === elemento) {
                return i;
            }
        }
        return -1;
    }

    const indice = trovaIndice(arrayElem, elem);

    const messaggio = indice === -1 ? "-1" : indice;
    console.log(messaggio);
})

