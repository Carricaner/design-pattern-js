const { applicantInfo1 } = require("../components/applicantinfo");

/*
To check:
1. The name is not null or empty.
2. The age is not null & larger than 0.
3. The phone number's format is corret. -> begin with "09" & string length is 10 w/o hyphen.
*/

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