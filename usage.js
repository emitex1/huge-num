var HugeNum = require("./index.js");

let hn = HugeNum("12213345674890");
let result = hn.sum("564564574982348");
console.log('12213345674890 + 564564574982348=', result, typeof result);