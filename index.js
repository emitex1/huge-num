'use strict';

module.exports = function(num) {
  var value;

  function HugeNum() {
    this.value = num || 0;
    console.log(this.value);
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

  HugeNum.prototype.sum = function(b) {
      let result = '';

      const aRevStr = strReverse(this.value);
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

  HugeNum.prototype.multiply = function(b) {
      let result = '0';
      let aString = this.value.toString();
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

          result = strSum(result, localMuliply);
      }
      return result;
  }

  return new HugeNum;
}
