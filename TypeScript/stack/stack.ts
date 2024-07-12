import { LinkedList } from "./linkedlist";

export class Stack {
    // Ecmascript or something
    // @ts-ignore
    #data_list: LinkedList;

    constructor() {
        this.#data_list = new LinkedList();
    }

    push(data: number) {
        this.#data_list.insertFirst(data);
    }

    pop(): number | undefined {
        if (this.isEmpty()) return;
        if (!this.#data_list.head) return;

        let headData = this.#data_list.head.data;
        this.#data_list.deleteHead();
        return headData;
    }

    peek(): number | undefined {
        if (!this.#data_list.head) return;
        return this.#data_list.head.data;
    }

    isEmpty(): boolean {
        return this.#data_list.length <= 0;
    }

    print(){
        this.#data_list.printList();
    }

    size():number|undefined{
        return this.#data_list.length;
    }
}