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

export {
    strReverse,
    removeInitialZero
};
