import { LinkedList } from "./linkedlist"

export class Queue {

    private list: LinkedList;

    constructor() {
        this.list = new LinkedList();
    }

    enqueue(data) {
        this.list.insertLast(data);
    }

    dequeue() {
        if (!this.list.head) return;
        let nodeData = this.list.head.data;
        this.list.deleteHead();
        return nodeData;
    }

    peek() {
        if (!this.list.head) return;
        return this.list.head.data;
    }

    isEmpty() {
        if (this.list.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    size() {
        return this.list.length;
    }

    print() {
        this.list.printList();
    }
}