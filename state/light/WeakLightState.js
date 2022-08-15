
class WeakLightState {
    #light;

    constructor(light) {
        this.#light = light;
    }
    
    pressButton() {
        console.log("[ Weak Light ]");
        this.#light.setCurrentState(this.#light.strongLightState);
    }
}

module.exports = { WeakLightState };