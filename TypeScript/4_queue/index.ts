import { Queue } from "./queue";

let q = new Queue();

console.log("isEmpty: ", q.isEmpty());
q.enqueue(8);
q.enqueue(16);
q.enqueue(32);
q.enqueue(64);
q.enqueue(128);
q.enqueue(256);

console.log("isEmpty: ", q.isEmpty());

q.print();

// console.log("peek: ", q.peek());
// console.log("dequeue: ", q.dequeue());
// console.log("size: ", q.size());

while (!q.isEmpty()) {
    console.log("peek: ", q.peek());
    console.log("dequeue: ", q.dequeue());
    console.log("size: ", q.size());

    q.print();
}