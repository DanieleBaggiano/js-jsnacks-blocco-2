document.getElementById("aggiungi-elem").addEventListener("click", function () {
    const elem = document.getElementById("input-elem").value;

    if (elem !== "") {
        array.push(elem);
        document.getElementById("input-elem").value = "";
        // console.log("Elemento aggiunto:", elem);
    };
});

function stampaArray(array) {
    return array.join(", ");
};

document.getElementById("stampa-elem").addEventListener("click", function () {
    const stampa = stampaArray(array);
    console.log("Elementi nell'array: " + stampa);
});