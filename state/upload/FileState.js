
const FileState = {
    InitState: {
        action1: () => {
            console.log("Start Scannig...");
            return FileState.UploadingState;
        },
        action2: () => {
            console.log("File deleted");
            return FileState.NullState;
        },
    },
    UploadingState: {
        action1: () => {
            console.log("Pause");
            return FileState.PauseState;
        },
        action2: () => {
            console.log("Uploading... cannot delete it.");
        },
    },
    PauseState: {
        action1: () => {
            console.log("Start");
            return FileState.UploadingState;
        },
        action2: () => {
            console.log("File deleted");
            return FileState.NullState;
        },
    },
    DoneState: {
        action1: () => {
            console.log("Already finished uploading");
        },
        action2: () => {
            console.log("File deleted");
            return FileState.NullState;
        },
    },
    NullState: {
        action1: () => {},
        action2: () => {},
    }
};

module.exports = { FileState };