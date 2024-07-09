"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleLinkedList_1 = require("./SingleLinkedList");
var singleList = new SingleLinkedList_1.LinkedList();
singleList.insertLast(1);
singleList.insertLast(2);
singleList.insertLast(3);
singleList.printList();
// console.log(singleList.find(2))
singleList.insertAfter(3, 212);
singleList.printList();
singleList.insertBefore(3, 21);
singleList.printList();
singleList.deleteNode(212);
// singleList.deleteNode(51515);
singleList.printList();
