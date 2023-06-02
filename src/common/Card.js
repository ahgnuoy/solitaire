export default class Card {
    constructor(_card) {
        this.sort = _card;
        this.rect = null;
        this.isSelected = false;
    }
    setRect(_rect) {
        this.rect = _rect;
    }
    setSelect(_bool) {
        this.isSelected = _bool;
    }
}