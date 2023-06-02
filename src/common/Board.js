import Place from './Place'
import Reserve from './Reserve'
export default class Board {
    constructor() {
        this.rankRange = 7
        this.places = this.generatePlaces()
        this.stock = []
    }
    generatePlaces() {
        let buff = [];
        let buffTree = [];
        for (let i = 0; i < this.rankRange; i++) {
            buffTree[i] = [];
            for (let j = 0; j < i + 1; j++) {
                const place = new Place(i,j)
                buffTree[i].push(place)
                buff.push(place)
            }
        }
        buff.forEach(place => {
            const upperRank = (place.rank === 0) ? null : place.rank - 1
            const lowerRank = (place.rank < this.rankRange - 1) ? place.rank + 1 : null
            const upperLeftPos = (place.pos === 0) ? null : place.pos - 1
            const upperRightPos = (place.pos === place.rank) ? null : place.pos
            const lowerLeftPos = place.pos
            const lowerRightPos = place.pos + 1
            place.setTree(
                (upperRank !== null && upperLeftPos !== null) ? buffTree[upperRank][upperLeftPos] : null,
                (upperRank !== null && upperRightPos !== null) ? buffTree[upperRank][upperRightPos] : null,
                (lowerRank !== null && lowerLeftPos !== null) ? buffTree[lowerRank][lowerLeftPos] : null,
                (lowerRank !== null && lowerRightPos !== null) ? buffTree[lowerRank][lowerRightPos] : null
                )
        })
        return buff;
    }
    set(deck) {
        this.places.forEach(element => {
            element.card = deck.cards.pop()
        })
        this.stock = deck.cards.map((card, index) => {
            const reserve = new Reserve(index)
            reserve.setCard(card)
            return reserve
        });
    }
    pick(x,y) {
        let pickedObjects = [];
        this.places.forEach(place => {
            if (checkPick(place,x,y)) {
                place.card.setSelect(true)
                pickedObjects.push(place)
            }
        })
        this.stock.forEach(reserve => {
            if (checkPick(reserve,x,y)) {
                reserve.card.setSelect(true)
                pickedObjects.push(reserve)
            }
        })
        return pickedObjects;
    }
}

function checkPick(obj,x,y) {
    if (obj.selectable && obj.card) {
        return (
            x > obj.card.rect[0] &&
            x < obj.card.rect[0] + obj.card.rect[2] &&
            y > obj.card.rect[1] &&
            y < obj.card.rect[1] + obj.card.rect[3]
        )
    } else {
        return false;
    }
}