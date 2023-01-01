const fibonacci = function(num) {
    const sequence = [];
    sequence[0] = 0;
    sequence[1] = 1;
    if (num < 0) return "OOPS";
    if (num < 2) return sequence[num];
    for (i = 2; i <= num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
