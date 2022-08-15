const { FileState } = require("./FileState");

class File {
    #currentState;
    #content;
    #process = 0;

    constructor(content) {
        this.#content = content;
        this.#currentState = FileState.InitState;
    }

    startOrPause() {
        let nextState = this.#currentState.action1();
        if (nextState) {
            this.#currentState = nextState;
        }
        if (nextState == FileState.UploadingState) {
            this.#process += Math.round(Math.random() * 150);
            let percentage = this.#process >= 100 ? 100 : this.#process;
            
            console.log("Processing... " + percentage + "%")

            if (this.#process >= 100) {
                this.#currentState = FileState.DoneState;
            }
        }
    }

    delete() {
        let nextState = this.#currentState.action2();
        if (nextState) {
            this.#currentState = nextState;
        }
    }
}

module.exports = { File };