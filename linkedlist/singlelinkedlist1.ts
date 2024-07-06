class LinkedListNode {
    data: any;
    next: LinkedListNode | null;
    constructor(data: any) {
        this.data = data; // the data value stored in the node
        this.next = null; // a reference to the next node in the list
    }
}

class LinkedListIterator {
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

class LinkedList {
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
}

let singleList = new LinkedList();
singleList.insertLast(1);
singleList.insertLast(2);
singleList.insertLast(3);
singleList.printList();