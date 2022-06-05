const { Performance } = require("../components/Performance"); 

class Bonus {
    #salary;
    #performance = Performance.OTHER;

    constructor(salary, performance) {
        this.#salary = salary;
        this.#performance = performance;
    }

    getBonus() {
        return this.#salary * this.#performance.getTimes();
    }
}

module.exports = { Bonus };