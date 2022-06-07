const randomBooleanGenerator = () => {
    return Math.floor(Math.random() * 2) == 0
}

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