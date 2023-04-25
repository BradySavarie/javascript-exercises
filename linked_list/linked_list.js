class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        let lastNode = this.head;
        while (lastNode.nextNode) {
            lastNode = lastNode.nextNode;
        }
        const node = new Node(value);
        lastNode.nextNode = node;
    }

    prepend(value) {
        const node = new Node(value);
        node.nextNode = this.head;
        this.head = node;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

// test list
const n1 = new Node(1);
const n2 = new Node(2);
n1.nextNode = n2;

const linkedList = new LinkedList(n1);
console.log(linkedList);
linkedList.append(3);
console.log(linkedList);
linkedList.prepend(4);
console.log(linkedList);
