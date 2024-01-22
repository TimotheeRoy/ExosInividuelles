const { isNumber } = require("tone");

const cardsValue = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const cardsColor = ['♠︎', '♣︎', '♡', '♢'];
const obj = {
    '1♠︎': 13, 'K♠︎': 12, 'Q♠︎': 11, 'J♠︎': 10, '10♠︎': 9, '9♠︎': 8, '8♠︎': 7, '7♠︎': 6, '6♠︎': 5, '5♠︎': 4, '4♠︎': 3, '3♠︎': 2, '2♠︎': 1,
    '1♣︎': 13, 'K♣︎': 12, 'Q♣︎': 11, 'J♣︎': 10, '10♣︎': 9, '9♣︎': 8, '8♣︎': 7, '7♣︎': 6, '6♣︎': 5, '5♣︎': 4, '4♣︎': 3, '3♣︎': 2, '2♣︎': 1,
    '1♡': 13, 'K♡': 12, 'Q♡': 11, 'J♡': 10, '10♡': 9, '9♡': 8, '8♡': 7, '7♡': 6, '6♡': 5, '5♡': 4, '4♡': 3, '3♡': 2, '2♡': 1,
    '1♢': 13, 'K♢': 12, 'Q♢': 11, 'J♢': 10, '10♢': 9, '9♢': 8, '8♢': 7, '7♢': 6, '6♢': 5, '5♢': 4, '4♢': 3, '3♢': 2, '2♢': 1
}


const creatDeck = () => {
    let deck = [];
    let currentCard = `${getRandomElFromArray(cardsValue)}${getRandomElFromArray(cardsColor)}`;
    while (deck.length !== 52) {
        if (!deck.includes(currentCard)) {
            deck.push(currentCard)
        }
        currentCard = `${getRandomElFromArray(cardsValue)}${getRandomElFromArray(cardsColor)}`
    }
    return deck
}

const getRandomElFromArray = (tab) => {
    return tab[Math.floor(Math.random() * tab.length)]
}

const deck = creatDeck();

const deal = (numberToDeal) => {
    let hand = [];
    for (let i = 0; i < numberToDeal; i++) {
        const card = getRandomElFromArray(deck)
        removeCardFromDeck(card)
        hand.push(card)
    }
    return hand
}

const removeCardFromDeck = (card) => {
    const index = deck.findIndex(elem => elem === card)
    deck.splice(index, 1)
}

const player1 = deal(2), player2 = deal(2);

const flop = () => {
    let cards = [], cardsFlop = [];
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            cards.push(deal(4))
            cards = cards.flat();
            cardsFlop.push(cards[1], cards[2], cards[3])
        }
        else {
            cards.push(deal(2))
            cards = cards.flat();
            cardsFlop.push(cards[5 + (i === 1 ? 0 : 2)])
        }
    }
    return cardsFlop
}


const showdown = (hand, flop) => {
    const obj = {
        quinte : false,
        suit : false,
        color : false,
        carre : false,
        brelan : false,
        pair : false,
        full : false
    }
    const fullHand = [hand, flop].flat();
    console.log(fullHand)

    //quinte ?
    if (isSuit(fullHand) && isSameColor(fullHand)) quinte = true
    //suite ?
    if (isSuit(fullHand)) suit = true
    //couleur ?
    if (isSameColor(fullHand)) color = true
    //carré ?
    if (countOccurence(fullHand, 4) === 1) carre = true
    //full ?
    if (countOccurence(fullHand, 3) === 1 && countOccurence(fullHand, 2) === 1) full = true
    //brelan ?
    if (countOccurence(fullHand, 3) === 1) brelan = true
    //2 paires ?
    if (countOccurence(fullHand, 2) === 2) pair = true
    //paire ?
    if (countOccurence(fullHand, 2) === 1) paire = true

    return obj
}

const countOccurence = (fullHand, pairBrelanOrCarre) => {
    const onlyValues = fullHand.map(card => card[0])
    let occurences = 0;
    for (let value of onlyValues) {
        const whithoutCurrentValue = onlyValues.filter(elem => elem !== value)
        if (whithoutCurrentValue.length === onlyValues.length - pairBrelanOrCarre)
            occurences++
    }
    return occurences / pairBrelanOrCarre
}

const isSameColor = (fullHand) => {
    const onlyColors = fullHand.map(card => card[1])
    const set = new Set(onlyColors)
    return set.size === 1
}


const isSuit = (fullHand) => {
    let suit = false;
    let onlyValues = fullHand.map(card => card[0] + (!isNaN(parseInt(card[1])) ? card[1] : ''))
    for (let i = 0; i < onlyValues.length; i++) {
        if (onlyValues[i] === 'K') onlyValues[i] = '13';
        else if (onlyValues[i] === 'Q') onlyValues[i] = '12';
        else if (onlyValues[i] === 'J') onlyValues[i] = '11';
        else if (onlyValues[i] === 'A') onlyValues[i] = '14';
    }

    onlyValues = onlyValues.sort((a, b) => a - b)    
    
    for (let j=2; j>=0; j--){
        for (let i = 0 + 2-j; i < onlyValues.length -j-1; i++) {
            if (onlyValues[i + 1] - onlyValues[i] !== 1) suit = false;
            else suit = true;
        }    
    }
    return suit
}


console.log(showdown(player1, flop()))

