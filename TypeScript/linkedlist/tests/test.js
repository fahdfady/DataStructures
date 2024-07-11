"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleLinkedList_1 = require("../SingleLinkedList");
function test(description, callback) {
    try {
        callback();
        console.log("\u2705 ".concat(description));
    }
    catch (error) {
        console.error("\u274C ".concat(description, ": ").concat(error.message));
    }
}
var linkedList = new SingleLinkedList_1.LinkedList();
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
test("Insert Last - should insert data at the end of the list", function () {
    linkedList.insertLast(4);
    if (linkedList.printList() !== "1 -> 2 -> 3 -> 4 -> ") {
        throw new Error("Insert Last test failed");
    }
});
test("Find - should find a node with the given data", function () {
    var node = linkedList.find(2);
    if ((node === null || node === void 0 ? void 0 : node.data) !== 2) {
        throw new Error("Find test failed");
    }
});
test("Delete Node - should delete a node with the given data", function () {
    linkedList.deleteNode(2);
    if (linkedList.printList() !== "1 -> 3 -> 4 -> ") {
        throw new Error("Delete Node test failed");
    }
});
// Add more test cases for other methods as needed
