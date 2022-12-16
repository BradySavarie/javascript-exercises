const removeFromArray = function (...args) {
    const array = args[0];
    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
}

console.log(removeFromArray([1, 2, 3], 1, 3));

// Do not edit below this line
module.exports = removeFromArray;
