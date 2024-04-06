document.getElementById("btn").addEventListener("click", function () {
    const arrayA = ["pippo", "pluto", "calzascarpe", "ciabatta"];
    console.log(arrayA);

    function rimuoviDallaCoda(arrayA) {
        return arrayA.slice(0, arrayA.length - 1);
    };

    const arrayB = rimuoviDallaCoda(arrayA);
    console.log(arrayB);
});
