export default class Reserve {
    constructor(_index) {
        this.index = _index;
        this.card = null;
        this.selectable = false;
    }
    setCard(_card) {
        this.card = _card
    }
    setSelectable() {
        // Turning Three card
        // Turning One card
        this.selectable = true
    }
}