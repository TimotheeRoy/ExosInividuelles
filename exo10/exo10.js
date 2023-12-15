function tryWord(word, base) {
    word = word.toLowerCase()
    base = base.toLowerCase()

    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];

    let arrayBase = base.split('');
    let arrayWord = word.split('');

    for (let char of arrayWord) {
        if (!arrayBase.includes(char)) {
            notInWord.push(char)
        }
    }

    for (let i = 0; i < Math.min(arrayBase.length,arrayWord.length); i++) {
        if (arrayBase[i] === arrayWord[i]) {
            wellPlaced.push(arrayWord[i]);
        }
        else if (!notInWord.includes(arrayWord[i])) {
            missplaced.push(arrayWord[i])
            console.log("tryWord , missplaced:", missplaced)
        }
    }



    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }

}

function guess() {
    let base = 'dictionnaire'
    let word = document.getElementById("word").value
    let result = tryWord(word, base)
    document.getElementById("word").value = ``
    document.getElementById("try").innerText = 'Proposition : ' + word
    document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
    if (result.wellPlaced.length === base.length) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    }
}


//let base = 'dictionnaire'
//document.getElementById("clues").innerText = `Première lettre : ${base[0]} | Nombre de lettres : ${base.length}`


module.exports = {tryWord}