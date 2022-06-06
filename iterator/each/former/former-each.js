const { collectionInfo1 } = require("../components/collectioninfo");

/*
1. To log every item in a collection of data.
*/

const logEveryData = (collection) => {
    for (let i = 0; i < collection.length; i++) {
        console.log("Data: " + collection[i]);
    }
};

logEveryData(collectionInfo1);
