document.getElementById("btn").addEventListener("click", function () {
    const arrayA = ["pippo", "pluto", "calzascarpe", "ciabatta"];
    console.log(arrayA);

    /**
     * 
     * @param {object} arrayA 
     * @returns {string}
     */
    function rimuoviDallaTesta(arrayA) {
        return arrayA.slice(1 - arrayA.length);
    };

    const arrayB = rimuoviDallaTesta(arrayA);
    console.log(arrayB);
});
