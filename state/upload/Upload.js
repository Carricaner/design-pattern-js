
class Upload {
    #file;

    constructor(file) {
        this.#file = file;
    }
    
    startOrPause() {
        this.#file.startOrPause();
    }

    delete() {
        this.#file.delete();
    }
}


module.exports = { Upload };