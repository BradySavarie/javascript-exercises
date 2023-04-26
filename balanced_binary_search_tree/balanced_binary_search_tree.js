class Tree {
    constructor(data) {
        this.data = data;
        this.root = null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(arr, start = 0, end = arr.length - 1) {
    // sort input array
    // remove duplicate values
    // create balanced BST

    if (start > end) {
        return null;
    }

    const mid = parseInt((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);
    return node;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

// Tests

let testArray = [1, 2, 3, 4, 5, 6, 7];
let tree = buildTree(testArray);
prettyPrint(tree);
