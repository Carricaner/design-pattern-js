


class OffLightState {
    #light;

    constructor(light) {
        this.#light = light;
    }
    
    pressButton() {
        console.log("[ Off Light ]");
        this.#light.setCurrentState(this.#light.weakLightState);
    }
}

module.exports = { OffLightState };