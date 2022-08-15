
class StrongLightState {
    #light;

    constructor(light) {
        this.#light = light;
    }
    
    pressButton() {
        console.log("[ Strong Light ]");
        this.#light.setCurrentState(this.#light.offLightState);
    }
}

module.exports = { StrongLightState };