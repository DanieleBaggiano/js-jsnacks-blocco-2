document.getElementById("btn").addEventListener("click", function () {
    const arrayA = ["pippo", "pluto", "calzascarpe", "ciabatta"];
    console.log(arrayA);

    /**
     * 
     * @param {object} arrayA 
     * @returns {string}
     */
    function rimuoviDallaCoda(arrayA) {
        return arrayA.slice(0, arrayA.length - 1);
    };

    const arrayB = rimuoviDallaCoda(arrayA);
    console.log(arrayB);
});
