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

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

// test list
