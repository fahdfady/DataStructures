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

    insertLast(data: any): void {
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

        // find the node with the given data
        const node = this.find(nodeData);

        if (!node) { console.error(`Error: the given node {${nodeData}} is not on the list`); return; }

        // Create a new node with the given data
        const newNode = new LinkedListNode(data);

        // Set the next pointer of the new node to the next node of the given node
        newNode.next = node.next;

        // Set the next pointer of the given node to the new node
        node.next = newNode;

        // If the given node is the tail of the list, update the tail pointer
        if (newNode.next === null) {
            this.tail = newNode;
        }

        this.length++
    }

    insertBefore(nodeData, data) {
        if (!nodeData) { console.error("you need to enter data of the node you want to insert before"); return; }
        if (!data) { console.error("you need to enter data to insert"); return; }

        // find the node with the given data
        let node = this.find(nodeData);

        if (!node) { console.error(`Error: the given node {${nodeData}} is not on the list`); return; }

        let newNode = new LinkedListNode(data);

        newNode.next = node;

        let parentNode = this.findParent(node);

        if (!parentNode) {
            this.head = newNode;
        } else {
            parentNode.next = newNode;
        }

        this.length++
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
                console.log(this.tail)
            } else {
                parentNode.next = node.next;
            }
        }

        this.length--;
    }
}