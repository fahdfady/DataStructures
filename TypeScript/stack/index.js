"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var stack = new stack_1.Stack();
console.log("", stack.isEmpty());
stack.push(12);
stack.push(23);
stack.push(41);
stack.push(55);
// console.log(stack.isEmpty());
// console.log(stack.size());
// stack.print();
// console.log("pop: ", stack.pop());
// console.log(stack.size());
// stack.print()
// console.log("peek: ", stack.peek());
// console.log(stack.size());
// stack.print()
stack.print();
while (!stack.isEmpty()) {
    console.log("pop: ", stack.pop());
    console.log(stack.size());
    stack.print();
    console.log("------------------------------------");
    console.log("");
}