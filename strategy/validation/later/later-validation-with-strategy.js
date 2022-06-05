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



