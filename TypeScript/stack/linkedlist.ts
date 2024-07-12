export class LinkedListNode {
    data: any;
    next: LinkedListNode | null;
    constructor(data: any) {
        this.data = data; // the data value stored in the node
        this.next = null; // a reference to the next node in the list
    }
}

export class LinkedListIterator {
    currentNode: LinkedListNode | null;

    constructor(node) {
        this.currentNode = node;
    }

    data(): any {
        if (this.currentNode) {
            return this.currentNode.data;
        }
        return null;
    }

    next(): LinkedListIterator {
        if (this.currentNode) {
            this.currentNode = this.currentNode.next;
        }
        return this;
    }

    current(): LinkedListNode | null {
        return this.currentNode;
    }
}

export class LinkedList {
    length: number;
    head: LinkedListNode | null;
    tail: LinkedListNode | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }


    addHead(node: LinkedListNode | null) {
        this.head = node;
        this.tail = node;
    }
    insertLast(data): void {
        const newNode = new LinkedListNode(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
        this.length++;
    }

    sum() {
        let sum = 0;
        for (let itr = this.begin(); itr.current() !== null; itr.next()) {
            sum += itr.data();
        }
        return sum;
    }

    begin() {
        const itr = new LinkedListIterator(this.head);
        return itr;
    }

    printList() {
        let output = "";
        for (let itr = this.begin(); itr.current() !== null; itr.next()) {
            output += itr.data() + " -> ";
        }
        console.log(output);
        return output;
    }

    find(data) {
        for (let itr = this.begin(); itr.current() !== null; itr.next()) {
            if (data === itr.data()) {
                return itr.current();
            }
        }

        return null;
    }

    findParent(node: LinkedListNode | null) {
        for (let itr = this.begin(); itr.current() !== null; itr.next()) {
            if (itr.current()?.next === node) {
                return itr.current();
            }
        }
        return null;
    }

    deleteNode(nodeData) {
        if (!nodeData) { console.error("you need to enter Data of the node you want to delete"); return; }

        // find the node with the given data
        const node = this.find(nodeData);
        if (!node) { console.error(`Error: the given node {${nodeData}} is not on the list`); return; }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.head === node) {
            this.head = this.head.next;
        } else {
            let parentNode = this.findParent(node);
            if (!parentNode) return;

            if (this.tail === node) {
                this.tail = parentNode;
            } else {
                parentNode.next = node.next;
            }
        }

        this.length--;
    }

    insertFirst(nodeData: any) {
        if (!nodeData) { console.error("you need to enter Data of the node you want to delete"); return; }

        let newNode = new LinkedListNode(nodeData);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    deleteHead() {
        if (this.head === null) { console.error("your list is empty"); return; }

        this.head = this.head.next;

        this.length--;
    }

}