// The function will randonly generate a boolean.
const randomBooleanGenerator = () => {
    return Math.floor(Math.random() * 2) == 0
}

// The object containes the functions which detect if a bowser belongs to the designated one.
const browserDetection = {
    edge: () => { 
        return randomBooleanGenerator()
    },
    chrome: () => {
        return randomBooleanGenerator()
    },
    fireFox: () => { 
        return randomBooleanGenerator()
    }
};

module.exports = { browserDetection };