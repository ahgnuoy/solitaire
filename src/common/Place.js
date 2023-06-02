export default class Place {
    constructor(_rank, _pos) {
        this.rank = _rank
        this.pos = _pos
        this.card = null
        
        this.upperLeft = null
        this.upperRight = null
        this.lowerLeft = null
        this.lowerRight = null

        this.selectable = false 
    }
    setCard(_card) {
        this.card = _card
    }
    setTree(_upperLeft = null, _upperRight = null, _lowerLeft = null, _lowerRight = null) {
        this.upperLeft = _upperLeft
        this.upperRight = _upperRight
        this.lowerLeft = _lowerLeft
        this.lowerRight = _lowerRight
    }
    setSelectable() {
        if(this.lowerLeft === null && this.lowerRight === null) this.selectable = true
        else this.selectable = false
    }
}