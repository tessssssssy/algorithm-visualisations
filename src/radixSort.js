

const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        max = Math.max(max, digitCount(arr[i]))
    }
}

const radixSort = (arr) => {
    const stop = mostDigits(arr);
    for (let i = 0; i < stop; i++) {

    }
}