
class Performance {

    static S = new Performance("S", 4);
    static A = new Performance("A", 3);
    static B = new Performance("B", 2);
    static C = new Performance("C", 1.5);
    static OTHER = new Performance("O", 1);

    #level;
    #times;

    constructor(level, times) {
        this.#level = level;
        this.#times = times;
    }

    getLevel() {
        return this.#level;
    }

    getTimes() {
        return this.#times;
    }
}

module.exports = { Performance };