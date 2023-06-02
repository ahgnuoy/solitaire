import Board from '../common/Board'
import Deck from '../common/Deck'
import drawPyramid from './drawer'
import * as mapper from './mapper'

export default class Pyramid {
    constructor(_ctx, _wh) {
        this.board = new Board();
        this.deck = new Deck();
        this.select = [];
        this.wh = _wh;
        this.ctx = _ctx;

        this.deck.init();
        this.deck.shuffle();
        this.board.set(this.deck);
        this.board.places.forEach(place => {
            place.card.setRect(mapper.place2rect(place, _wh))
        })
        this.board.stock.forEach((reserve, index) => {
            reserve.card.setRect(mapper.stock2rect(index, _wh))
        })
    }
    draw () {
        drawPyramid(this.ctx, this.wh, this.board);
    }
    onClick(x,y) {
        const pickedObject = this.board.pick(x,y)[0]
        if(pickedObject) {
            this.select.push(pickedObject)
            if(this.select.length > 0) {
                if(this.select.length > 2) {
                    this.select[0].card.setSelect(false);
                    this.select.shift();
                }
                this.check()
            }
        } else {
            this.select.forEach(place => {
                place.card.setSelect(false)
            })
            this.select = []
        }

    }
    check() {
        const idxKing = this.select.findIndex(obj => obj.card.sort.number === 13)
        if(idxKing >= 0) {
            rid(this.select[idxKing])
            this.select.splice(idxKing, 1);
        }
        if(this.select.length > 1) {
            if(this.select[0].card.sort.number + this.select[1].card.sort.number === 13) {
                this.select.forEach(obj => {
                    rid(obj)
                })
                this.select = [];
            } 
        }
    }
}

function rid(obj) {
    if(obj.upperLeft) {
        obj.upperLeft.lowerRight = null
        obj.upperLeft = null
    }
    if(obj.upperRight) {
        obj.upperRight.lowerLeft = null
        obj.upperRight = null
    }
    obj.card = null
}