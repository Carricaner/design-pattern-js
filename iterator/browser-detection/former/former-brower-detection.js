const { browserDetection } = require("../../components/browserdetection");

/*
1. To detect which browser a client uses and give him/her a corresponding tag.
*/

const detectBrowserAndSendCorrespondingTag = (browserDetection) => {
    if (browserDetection.edge()) {
        return browserDetection.edge.name
    } else if (browserDetection.chrome()) {
        return browserDetection.chrome.name
    } else if (browserDetection.firefox()) {
        return browserDetection.firefox.name
    } else {
        return null
    }
};

console.log(detectBrowserAndSendCorrespondingTag(browserDetection))