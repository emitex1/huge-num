import HugeNum from "./src/index.js";

console.log('Here are some usage samples:');

const NUMBER_1 = "12213345674890";
const NUMBER_2 = "564564574982348";

let hn = HugeNum(NUMBER_1);
let summation = hn.sum(NUMBER_2);
console.log(NUMBER_1 + ' + ' + NUMBER_2 + '=', summation);

let multiply = hn.multiply(NUMBER_2);
console.log(NUMBER_1 + ' * ' + NUMBER_2 + '=', multiply);

console.log('Good luck!');
