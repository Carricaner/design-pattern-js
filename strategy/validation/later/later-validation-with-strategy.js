const { applicantInfo1 } = require("../components/applicantinfo");
const { strategies } = require("../components/strtegies");
const { Validator } = require("./Validator");

/*
To check:
1. The name is not null or empty.
2. The age is not null & larger than 0.
3. The phone number's format is corret. -> begin with "09" & string length is 10 w/o hyphen.
*/

// Demo
let validations = [
    {
        strategy: strategies.isValidName,
        target: applicantInfo1.name
    },
    {
        strategy: strategies.isValidAge,
        target: applicantInfo1.age
    },
    {
        strategy: strategies.isValidPhone,
        target: applicantInfo1.phone
    }
];

let checkApplicant = (validations) => {
    let validator = new Validator();
    for (let i = 0; i < validations.length; i++) {
        validator.add(validations[i].strategy, validations[i].target);
    }

    let errorMsg = validator.start();
    if (errorMsg) {
        return errorMsg;
    }
};

console.log(checkApplicant(validations));



