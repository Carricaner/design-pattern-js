const strategies = {
    isValidName: (value) => {
        if ( !value || value.length == 0) {
            return "Invalid name";
        }
    },
    isValidAge: (value) => {
        if ( !value || value < 0) {
            return "Invalid age";
        }
    },
    isValidPhone: (value) => {
        if (!value.startsWith("09") || value.replaceAll("-", "").length != 10) {
            return "Invalid phone";
        }
    }
};


module.exports = { strategies };