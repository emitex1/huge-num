import { strReverse, removeInitialZero } from '../../util/util.js';
import sum from '../sum/sum.js';

export default function multiply(a, b) {
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
