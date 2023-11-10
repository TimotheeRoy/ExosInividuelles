let bornePlus = 50;
let borneMoins = 0;
let attempts = 1;
const numberPlayer1 = document.getElementById('player1');
const numberPlayer2 = document.getElementById('player2');
const valider1 = document.getElementById('valider1');
const valider2 = document.getElementById('valider2');
let numberToGuess;


numberPlayer1.addEventListener('input' , () => {
    numberToGuess = numberPlayer1.value ;
});

const didWin = (givenNumber,numberToGuess) =>{
    if (givenNumber===numberToGuess){
        alert(`Bravo ! Vous avez deviné le nombre en ${attempts} essais`);
        return true;
    }
    else if (givenNumber<numberToGuess){
        if (givenNumber>borneMoins)
            borneMoins = givenNumber;
        alert(`Plus grand : ${borneMoins}<?<${bornePlus} \n${attempts} essais`);
        return false;
    }
    else{
        if (givenNumber<bornePlus)
            bornePlus = givenNumber;
        alert(`Plus petit : ${borneMoins}<?<${bornePlus} \n${attempts} essais`);
        return false;
    }
}; // retourne true si givenNumber=numberToGuess, false sinon


const gamePlay = () =>{
    const givenNumber = numberPlayer2.value;
    const win = didWin(givenNumber,numberToGuess);
    attempts++;
    if (!win)
        numberPlayer2.value='';
};

valider1.addEventListener('click', ()=>{
    alert('Choix enregistré');
});

valider2.addEventListener('click' ,() =>{
    gamePlay();
});