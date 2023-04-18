// Sum Range

function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}

// Power

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

// Factorial

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// All Less Than 7

function all(arr, cb) {
    if (arr.length === 0) return true;

    if (cb(arr[0])) {
        arr.shift();
        return all(arr, cb);
    }
    return false;
}

const allLessThan = all([1, 5, 9], function (num) {
    return num < 7;
});

// Product of an Array

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr.shift() * productOfArray(arr);
}

// Contains Value

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2',
                    },
                },
            },
        },
    },
};

function contains(obj, value) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], value);
        }
        if (obj[key] === value) {
            return true;
        }
    }
    return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, 'foo'); // false

// Multi-Dimensional Array Integer Count

function totalIntegers(array) {
    if (array.length === 0) return 0;

    let total = 0;
    let first = array.shift();

    if (Array.isArray(first)) {
        total += totalIntegers(first);
    } else if (Number.isInteger(first)) {
        total += 1;
    }

    return total + totalIntegers(array);
}

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

console.log(seven);
