
class Iterator {
    #collection;
    #currentPosition = -1;

    constructor(collection) {
        this.#collection = collection;
    }

    hasNext() {
        return this.#currentPosition < this.#collection.length - 1;
    }

    getNext() {
        if (this.hasNext()) {
            this.#currentPosition ++;
            return this.#collection[this.#currentPosition];
        }
        return null;
    }
}

module.exports = { Iterator };