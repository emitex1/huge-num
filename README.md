# Huge Numbers
A npm package to apply math 🔢 operations on huge numbers

[![Version](https://img.shields.io/npm/v/huge-num.svg)](https://www.npmjs.com/package/huge-num)
[![Downloads](https://img.shields.io/npm/dm/huge-num.svg)](https://www.npmjs.com/package/huge-num)
<!-- [![License](https://img.shields.io/github/license/em-it/huge-num.svg)](https://github.com/em-it/huge-num/blob/master/LICENSE) -->

## Features:
- Numbers size limit:
  - unlimited
- Math operators:
  - Sum (+)
  <!-- - Minus (-) -->
  - Multiply (×)
  <!-- - Devide (÷) -->

## Usage:
HugeNum can be used in node.js

Install HugeNum using [npm](https://www.npmjs.com/package/huge-num):

    npm install huge-num

Then you can use the operators on a huge number
```js
import HugeNum from 'huge-num';

const NUMBER_1 = "12213345674890";
const NUMBER_2 = "564564574982348";

// define a huge num from a string
let n1 = HugeNum(NUMBER_1);

// summation operator
const summation = n1.sum(NUMBER_2);
console.log(NUMBER_1 + ' + ' + NUMBER_2 + '=', summation);
// result -> 12213345674890 + 564564574982348= 576777920657238

// multiply operator
const multiply = n1.multiply(NUMBER_2);
console.log(NUMBER_1 + ' *+* ' + NUMBER_2 + '=', multiply);
// result -> 12213345674890 * 564564574982348= 6895222310056771043896841720
```

## Links:
<!-- - [Live Example](https://netherland-explorer.netlify.app/) -->
- [The Official Page](https://em-it.github.io/huge-num/)
- [Technical Documents in the Wiki](https://github.com/Em-IT/huge-num/wiki)

<!-- ![](/src/assets/images/logo.png) -->

<!-- ## Usage: -->

## Developer:

* **Emad Armoun**

* [www.EmadArmoun.com](http://www.EmadArmoun.com)

* [Emad.Armoun@gmail.com](Emad.Armoun@gmail.com)

* [LinkedIn profile](https://www.linkedin.com/in/em-it/)

<!-- ![](/src/assets/images/me.jpg) -->
