const { browserDetection } = require("../../components/browserdetection");
const { Iterator } = require("../../components/Iterator"); 

/*
1. To detect which browser a client uses and give him/her a corresponding tag.
*/

const detectBrowser = (iterator) => {
    while (iterator.hasNext()) {
        let func = iterator.getNext();
        if (func()) {
            return func.name;
        }
    }
    return null;
};

const detections = [
    browserDetection.edge, 
    browserDetection.chrome, 
    browserDetection.fireFox
];
const iterator = new Iterator(detections);

console.log(detectBrowser(iterator));

