class Validator {
    #arr = [];

    constructor() {}

    add(validationFunc, target) {
        this.#arr.push( () => {
            return validationFunc.apply(null, [target])
        } );
    }

    start() {
        for (let i = 0; i < this.#arr.length; i++) {
            let errorMsg = this.#arr[i]();
            if (errorMsg) {
                return errorMsg;
            }
        }
    }
}

module.exports = { Validator };