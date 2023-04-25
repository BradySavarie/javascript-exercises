class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    append(value) {
        if (!this.head) {
            const node = new Node(value);
            this.head = node;
            this.tail = node;
            return;
        }
        let lastNode = this.head;
        while (lastNode.nextNode) {
            lastNode = lastNode.nextNode;
        }
        const node = new Node(value);
        lastNode.nextNode = node;
        this.tail = node;
    }

    prepend(value) {
        if (!this.head) {
            const node = new Node(value);
            this.head = node;
            this.tail = node;
            return;
        }
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

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

// test list

const linkedList = new LinkedList(new Node(1));
linkedList.append(2);
linkedList.prepend(3);
console.log(linkedList);
