var { strReverse, removeInitialZero } = require('../util/util');

module.exports = function sum(a, b) {
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
