# Huge Numbers
A npm package to apply math 🔢 operations on huge numbers (unlimited length 😉)

[![Version](https://img.shields.io/npm/v/huge-num.svg)](https://www.npmjs.com/package/huge-num)
[![Downloads](https://img.shields.io/npm/dm/huge-num.svg)](https://www.npmjs.com/package/huge-num)
[![License](https://img.shields.io/github/license/em-it/huge-num.svg)](https://github.com/em-it/huge-num/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/Em-IT/huge-num/badge.svg?branch=master)](https://coveralls.io/github/Em-IT/huge-num?branch=master)

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

Then you can define a huge number using a string
```js
import HugeNum from 'huge-num';

const NUMBER_1 = "12213345674890";
const NUMBER_2 = "564564574982348";

let n1 = HugeNum(NUMBER_1);
let n2 = HugeNum(NUMBER_2);
```

Then you can use the operators on a huge number

### `huge_number_1.sum(huge_number_2)`

```js
const summation = n1.sum(NUMBER_2);
console.log(NUMBER_1 + ' + ' + NUMBER_2 + '=', summation);
// result -> 12213345674890 + 564564574982348= 576777920657238
```

### `huge_number_1.multiply(huge_number_2)`

```js
const multiply = n1.multiply(NUMBER_2);
console.log(NUMBER_1 + ' *+* ' + NUMBER_2 + '=', multiply);
// result -> 12213345674890 * 564564574982348= 6895222310056771043896841720
```

<!-- ### Method Chaining
HugeNum operations return HugeNums, which allows you to chain methods.
for example: -->


## Documentation:
<!-- - [Live Example](https://netherland-explorer.netlify.app/) -->
- [Github Official Page](https://emitex1.github.io/huge-num/)
- [Wiki of Technical Documents](https://github.com/emitex1/huge-num/wiki)
- [NPM Package](https://www.npmjs.com/package/huge-num)


## Contributors
To contribute, just fork the project, make some changes, and submit a pull request. 


## License
This project is public domain. For more details, read about the [Unlicense](http://unlicense.org/).


## Developer:
* **Emad Armoun**
* [www.EmadArmoun.com](http://www.EmadArmoun.com)
* [Emad.Armoun@gmail.com](Emad.Armoun@gmail.com)
* [LinkedIn profile](https://www.linkedin.com/in/emitex1/)
<!-- ![](/src/assets/images/me.jpg) -->
