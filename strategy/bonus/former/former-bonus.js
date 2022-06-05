
/*
To calculate the bonus according to level & salary.
*/

const calculateBonus = (level, salary) => {
    if (level == "S") {
        return salary * 4;
    }

    if (level == "A") {
        return salary * 3;
    }

    if (level == "B") {
        return salary * 2;
    }

    return salary;
};

let salary = 40000;
console.log("S level: " + calculateBonus("S", salary));
console.log("A level: " + calculateBonus("A", salary));
console.log("B level: " + calculateBonus("B", salary));
console.log("Other levels: " + calculateBonus("C", salary));