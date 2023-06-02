import Card from './Card'
import cardSet from '../common/cards'

export default class Deck {
    constructor() {
        this.cards = [];
    }
    init() {
        cardSet.flat().forEach(card => {
            this.cards.push(new Card(card))
        });
    }
    shuffle() {
        for(let i = this.cards.length; i > 0; i--) {
            const random = Math.floor(Math.random() * i)
            this.cards.push(this.cards[random])
            this.cards.splice(random,1)
        }
    }
}