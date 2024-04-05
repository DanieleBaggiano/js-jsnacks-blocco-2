function lengthWords(Word1, Word2) {
    if (Word1.length === Word2.length) {
        console.log(Word1, Word2);
    } else if (Word1.length < Word2.length) {
        console.log(Word2);
    }else {
        console.log(Word1);
    }
}