import { LinkedList } from "./linkedlist";

export class Stack<T> {
    #data_list: T[];
    #top_index: number;

    constructor() {
        this.#data_list = [];
        this.#top_index = -1;
    }

    push(data: T) {
        this.#data_list.push(data);
        this.#top_index++;
    }

    pop(): T | undefined {
        if (this.isEmpty()) return;
        if (this.#top_index == -1) return;

        let headData = this.#data_list.splice(this.#top_index, 1)[0];
        this.#top_index --;
        return headData;
    }

    peek(): T | undefined {
        if (!this.#data_list[this.#top_index]) return;
        return this.#data_list[this.#top_index];
    }

    isEmpty(): boolean {
        return this.#data_list.length <= 0;
    }

    print(): void {
        let output = "";
        for (let i = this.#top_index; i >= 0; i--) {
            output += this.#data_list[i] + ", ";
        }

        console.log(`[${output}]`);
    }

    size(): number {
        return this.#data_list.length;
    }
}