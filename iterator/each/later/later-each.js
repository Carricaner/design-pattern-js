const { collectionInfo1 } = require("../components/collectioninfo");
const { Iterator } = require("../components/Iterator"); 

/*
1. To log every item in a collection of data.
*/

let iterator = new Iterator(collectionInfo1);

const logEveryData = (iterator) => {
    while (iterator.hasNext()) {
        let data = iterator.getNext();
        console.log("Data: " + data);
    };
};

logEveryData(iterator);