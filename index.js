'use strict';

module.exports = function(num) {
  var value;

  function HugeNum() {
    this.value = num || 0;
  }

  function strReverse(str) {
      return str.toString().split('').reverse().join('');
  }

  function removeInitialZero(str) {
      let zeroLength = 0;
      for(let i=0; i<str.length; ++i)
          if(str[i] === '0')
              zeroLength++;
          else
              break;
      return str.substr(zeroLength);
  }

  function sum(a, b) {
    let result = '';

    const aRevStr = strReverse(a);
    const bRevStr = strReverse(b);
    let added = 0;
    const maxSize = Math.max(aRevStr.length, bRevStr.length);
    
    for(let i=0; i<maxSize; ++i) {
        let ai = parseInt(aRevStr[i] || 0);
        let bi = parseInt(bRevStr[i] || 0);
        
        let singleSum = ai + bi + added;
        if(singleSum < 10) {
            result += singleSum;
            added = 0;
        }
        else {
            result += (singleSum % 10);
            added = Math.floor(singleSum / 10);
        }
    }
    result += added;
    
    result = strReverse(result);
    result = removeInitialZero(result);
    return result;
  }

  HugeNum.prototype.sum = function(b) {
      return sum(this.value, b);
  }

  function multiply(a, b) {
    let result = '0';
    let aString = a.toString();
    let bString = b.toString();
    for(let i=aString.length - 1; i>=0; --i) {
      let localMuliply = '';
      let added = 0;
      for(let j=0; j<aString.length - 1 - i; ++j)
        localMuliply += '0';
      for(let j=bString.length - 1; j>=0; --j) {
        const ai = parseInt(aString[i]);
        const bj = parseInt(bString[j]);
        let m = (ai * bj) + added;
        added = Math.floor(m / 10);
        localMuliply += (m % 10);
      }
      localMuliply += added;
      localMuliply = strReverse(localMuliply);
      localMuliply = removeInitialZero(localMuliply);

      result = sum(result, localMuliply);
    }
    return result;
  }

  HugeNum.prototype.multiply = function(b) {
    return multiply(this.value, b);
  }

  return new HugeNum;
}
