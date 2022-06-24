const { Bonus } = require("../components/Bonus");
const { Performance } = require("../components/Performance");

/*
To calculate the bonus according to level & salary.
*/
let salary = 40000;
let bonus4SLevel = new Bonus(salary, Performance.S);
console.log(bonus4SLevel.getBonus());

let bonus4ALevel = new Bonus(salary, Performance.A);
console.log(bonus4ALevel.getBonus());

let bonus4CLevel = new Bonus(salary, Performance.C);
console.log(bonus4CLevel.getBonus());

let bonus4OtherLevel = new Bonus(salary, Performance.OTHER);
console.log(bonus4OtherLevel.getBonus());