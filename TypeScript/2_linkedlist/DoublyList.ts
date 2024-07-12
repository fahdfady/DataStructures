export class LinkedListNode {
    data: any;
    next: LinkedListNode | null;
    back: LinkedListNode | null;
    constructor(data: any) {
        this.data = data; // the data value stored in the node
        this.next = null; // a reference to the next node in the list
        this.back = null; // a reference to the previous node in the list
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

    insertLast(data: any): void {
        const newNode = new LinkedListNode(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.back = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    begin() {
        const itr = new LinkedListIterator(this.head);
        return itr;
    }

    printList() {
        let output = "";
        if (this.head === null && this.tail === null) output = "Empty";

        else {
            for (let itr = this.begin(); itr.current() !== null; itr.next()) {
                output += itr.data() + " -> ";
            }
        }
        console.log(output);
    }

    find(data) {
        for (let itr = this.begin(); itr.current() !== null; itr.next()) {
            if (data === itr.data()) {
                return itr.current();
            }
        }

        return null;
    }

    findParent(node) {
        for (let itr = this.begin(); itr.current() !== null; itr.next()) {
            if (itr.current()?.next === node) {
                return itr.current();
            }
        }
        return null;
    }

    /**
     * Inserts a new node after the given node in the list.
     * @param node - The node after which the new node will be inserted.
     * @param data - The data to be stored in the new node.
     */
    insertAfter(nodeData, data) {
        if (!nodeData) { console.error("you need to enter data of the node you want to insert after"); return; }
        if (!data) { console.error("you need to enter data to insert"); return; }

        let newNode = new LinkedListNode(data);

        let node = this.find(nodeData);
        if (!node) { console.error(`Error: the given node {${nodeData}} is not on the list`); return; }

        newNode.next = node.next;
        newNode.back = node;
        node.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode
        } else {
            newNode.next.back = newNode;
        }
    }

    insertBefore(nodeData, data) {
        if (!nodeData) { console.error("you need to enter data of the node you want to insert before"); return; }

        if (!data) { console.error("you need to enter data to insert"); return; }

        let newNode = new LinkedListNode(data);

        let node = this.find(nodeData);
        if (!node) { console.error(`Error: the given node {${nodeData}} is not on the list`); return; }

        newNode.next = node;
        if (node.back === null) {
            this.head = newNode;
        } else {
            node.back.next = newNode;
        }

        node.back = newNode;
    }

    deleteNode(nodeData) {
        // TODO: solve thie possibly 'null' errors in typescript
        if (!nodeData) { console.error("you need to enter data of the node you want to delete"); return; }

        let node = this.find(nodeData);
        if (!node) { console.error(`Error: the given node {${nodeData}} is not on the list`); return; }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.head === node) {
            this.head = this.head.next;
            this.head.back = null;
        } else if (node === this.tail) {
            this.tail = this.tail.back;
            this.tail.next = null;
        } else {
            node.back.next = node.next;
            node.next.back = node.back;
        }
    }

}