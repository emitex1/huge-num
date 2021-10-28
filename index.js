'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
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

function strSum(a, b) {
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

function strMultiply(a, b) {
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

        result = strSum(result, localMuliply);
    }
    return result;
}

/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    const biggerCost = Math.max(bc, wc);
    const smallerCost = Math.min(bc, wc);
    
    if(b===0 || w===0) {
        if (Number.isSafeInteger(b*bc + w*wc))
            return b*bc + w*wc;
        else
            return strSum(
                strMultiply(b, bc),
                strMultiply(w, wc)
            );
    }
    if(biggerCost === smallerCost) {
        if (Number.isSafeInteger(b*bc + w*wc))
            return b*bc + w*wc;
        else
            return strSum(
                strMultiply(b, bc),
                strMultiply(w, wc)
            );
    }
    else if(biggerCost > smallerCost + z) {
        const biggerCount = bc > wc ? b : w;
        
        if (Number.isSafeInteger((b+w)*smallerCost) && Number.isSafeInteger(biggerCount*z) && Number.isSafeInteger((b+w)*smallerCost + biggerCount*z) )
            return (b+w)*smallerCost + biggerCount*z;
        else {
            return (
                strSum(
                    strMultiply(b+w, smallerCost),
                    strMultiply(biggerCount, z)
                )
            )
        }
    }
    else {
        if (Number.isSafeInteger(b*bc + w*wc))
            return b*bc + w*wc;
        else
            return strSum(
                strMultiply(b, bc),
                strMultiply(w, wc)
            );
    }
        

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const b = parseInt(firstMultipleInput[0], 10);

        const w = parseInt(firstMultipleInput[1], 10);

        const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const bc = parseInt(secondMultipleInput[0], 10);

        const wc = parseInt(secondMultipleInput[1], 10);

        const z = parseInt(secondMultipleInput[2], 10);

        const result = taumBday(b, w, bc, wc, z);

        ws.write(result + '\n');
    }

    ws.end();
}
