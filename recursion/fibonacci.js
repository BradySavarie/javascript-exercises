function fibs(num) {
    let sequence = [0, 1];

    for (let i = 0; i < num - 2; i++) {
        let sum = sequence[i] + sequence[i + 1];
        sequence.push(sum);
    }

    return sequence;
}

function fibsRec(num, sequence = [0, 1]) {
    if (sequence.length >= num) {
        return sequence;
    }
    let sum = sequence.at(-1) + sequence.at(-2);
    sequence.push(sum);
    return fibsRec(num, sequence);
}

console.log(fibsRec(8));
