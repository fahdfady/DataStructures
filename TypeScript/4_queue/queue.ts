import { LinkedList } from "./linkedlist"

export class Queue {

    private items: LinkedList;

    constructor() {
        this.items = new LinkedList();
    }

    enqueue(data) {
        this.items.insertLast(data);
    }

    dequeue(data) {
 
        let nodeData = this?.items?.head.data;

        this.items.deleteHead();
        this.items.insertLast(data);
    }


}