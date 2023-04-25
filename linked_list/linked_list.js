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

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        let count = 0;
        let node = this.head;
        while (count < index) {
            node = node.nextNode;
            count++;
        }
        return node;
    }

    pop() {
        let targetNode = this.head;
        while (targetNode.nextNode != this.tail) {
            targetNode = targetNode.nextNode;
        }
        targetNode.nextNode = null;
        this.tail = targetNode;
    }

    contains(value) {
        let targetNode = this.head;
        while (targetNode.nextNode) {
            if (targetNode.value === value) {
                return true;
            }
            targetNode = targetNode.nextNode;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let targetNode = this.head;
        while (targetNode) {
            if (targetNode.value === value) {
                return index;
            }
            index++;
            targetNode = targetNode.nextNode;
        }
        return null;
    }

    toString() {
        let currentNode = this.head;
        let currentValue = currentNode.value;
        let string = currentValue.toString();
        while (currentNode) {
            currentValue = currentNode.value;
            string += ' -> ' + currentValue.toString();
            currentNode = currentNode.nextNode;
        }
        return string + ' -> null';
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

// test list
const n1 = new Node(0);
const linkedList = new LinkedList(n1);
linkedList.append(1);
linkedList.append(2);
console.log(linkedList.toString());
