
// To check:
// 1. The name is not null or empty
// 2. The age is not null & larger than 0.
// 3. The phone number's format is corret. -> begin with "09" & string length is 10 w/o hyphen.

let applicantInfo1 = {
    name: "Jack",
    age: 23,
    phone: "091234567890"
};

let applicantInfo2 = {
    name: "Anping",
    age: 25,
    phone: "09-23457920"
};


// Old check
let checkedResult = (applicantInfo) => {
    let errorMsg = "";
    let pass = true;
    
    let name = applicantInfo.name;
    if ( !name || name.length == 0) {
        errorMsg = "Invalid name";
        pass = false;
    }

    let age = applicantInfo.age;
    if ( !age || age < 0) {
        errorMsg = "Invalid age";
        pass = false;
    }

    let phone = applicantInfo.phone;
    if (!phone.startsWith("09") || phone.length != 10) {
        errorMsg = "Invalid phone";
        pass = false;
    }
    return {
        pass: pass, 
        errorMsg: errorMsg
    };
}

console.log(checkedResult(applicantInfo1));


// New check

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
        if (!value.startsWith("09") || value.length != 10) {
            return "Invalid phone";
        }
    }
};


class Validator {
    #arr = [];

    constructor() {}

    add(validationFunc, target) {
        this.#arr.push( () => {
            return validationFunc.apply(null, [target])
        } );
    }

    start() {
        for (let i = 0; i < this.#arr.length; i++) {
            let errorMsg = this.#arr[i]();
            if (errorMsg) {
                return errorMsg;
            }
        }
    }
}

let checkApplicant = (applicantInfo) => {
    let validator = new Validator();
    validator.add(strategies.isValidName, applicantInfo.name);
    validator.add(strategies.isValidAge, applicantInfo.age);
    validator.add(strategies.isValidPhone, applicantInfo.phone);

    let errorMsg = validator.start();
    if (errorMsg) {
        return errorMsg;
    }
};

console.log(checkApplicant(applicantInfo1));



