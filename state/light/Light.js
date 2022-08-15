const { OffLightState } = require("./OffLightState");
const { WeakLightState } = require("./WeakLightState");
const { StrongLightState } = require("./StrongLightState");

class Light {
    #currentState;
    offLightState = new OffLightState(this);
    weakLightState = new WeakLightState(this);
    strongLightState = new StrongLightState(this);

    constructor() {
        this.#currentState = this.offLightState;
    }

    pressButton() {
        this.#currentState.pressButton();
    }

    setCurrentState(state) {
        this.#currentState = state;
    }
}

module.exports = { Light };