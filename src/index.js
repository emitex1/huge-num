'use strict';

import sum from './core/sum/sum.js';
import multiply from './core/multiply/multiply.js';

export default function(num) {
  var value;

  function HugeNum() {
    this.value = num || 0;
  }

  HugeNum.prototype.sum = function(b) {
      return sum(this.value, b);
  }

  HugeNum.prototype.multiply = function(b) {
    return multiply(this.value, b);
  }

  return new HugeNum;
}
