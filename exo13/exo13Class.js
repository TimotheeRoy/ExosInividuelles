const cardsValue = ['1', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const cardsColor = ['♠︎', '♣︎', '♡', '♢'];

class Card {
    constructor(value, color) {
        this.value = value
        this.color = color
    }

    toString() {
        return `${this.value}${this.color}`
    }
}

class Deck {
    constructor() {
        this.deck = this.#shuffle(this.#creatDeck());
    }

    #creatDeck() {
        let deck = [];
        for (let color of cardsColor) {
            for (let value of cardsValue) {
                const card = new Card(value, color)
                deck.push(card.toString())
            }
        }
        return deck
    }

    #shuffle(deck) {
        for (let i = deck.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = deck[i]
            deck[i] = deck[j]
            deck[j] = temp
        }
        return deck
    }
}

// console.log(new Deck())

class TexasHoldem {
    constructor() {
        this.deck = new Deck().deck
        this.player1 = this.deal(2)
        this.player2 = this.deal(2)
        this.flop = this.flop()
    }

    deal(numberToDeal) {
        let hand = [];
        this.deck = this.deck.filter((card, index) => {
            if (index < numberToDeal){
                hand.push(card)
                return false        
            }
            return true
        })
        return hand
    }

    flop() {
        let cards = [], cardsFlop = [];
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                cards.push(this.deal(4))
                cards = cards.flat();
                cardsFlop.push(cards[1], cards[2], cards[3])
            }
            else {
                cards.push(this.deal(2))
                cards = cards.flat();
                cardsFlop.push(cards[5 + (i === 1 ? 0 : 2)])
            }
        }
        return cardsFlop
    }
}


const texasHoldem = new TexasHoldem()
console.log(texasHoldem.deck)
console.log(texasHoldem.player1)
console.log(texasHoldem.player2)
console.log(texasHoldem.flop)