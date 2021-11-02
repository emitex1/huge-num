'use strict';

var sum = require('./core/sum');
var multiply = require('./core/multiply');

module.exports = function(num) {
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
