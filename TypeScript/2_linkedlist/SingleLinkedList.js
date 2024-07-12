"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListIterator = exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.data = data; // the data value stored in the node
        this.next = null; // a reference to the next node in the list
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var LinkedListIterator = /** @class */ (function () {
    function LinkedListIterator(node) {
        this.currentNode = node;
    }
    LinkedListIterator.prototype.data = function () {
        if (this.currentNode) {
            return this.currentNode.data;
        }
        return null;
    };
    LinkedListIterator.prototype.next = function () {
        if (this.currentNode) {
            this.currentNode = this.currentNode.next;
        }
        return this;
    };
    LinkedListIterator.prototype.current = function () {
        return this.currentNode;
    };
    return LinkedListIterator;
}());
exports.LinkedListIterator = LinkedListIterator;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.insertLast = function (data) {
        var newNode = new LinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.begin = function () {
        var itr = new LinkedListIterator(this.head);
        return itr;
    };
    LinkedList.prototype.printList = function () {
        var output = "";
        for (var itr = this.begin(); itr.current() !== null; itr.next()) {
            output += itr.data() + " -> ";
        }
        console.log(output);
        return output;
    };
    LinkedList.prototype.find = function (data) {
        for (var itr = this.begin(); itr.current() !== null; itr.next()) {
            if (data === itr.data()) {
                return itr.current();
            }
        }
        return null;
    };
    LinkedList.prototype.findParent = function (node) {
        var _a;
        for (var itr = this.begin(); itr.current() !== null; itr.next()) {
            if (((_a = itr.current()) === null || _a === void 0 ? void 0 : _a.next) === node) {
                return itr.current();
            }
        }
        return null;
    };
    /**
     * Inserts a new node after the given node in the list.
     * @param node - The node after which the new node will be inserted.
     * @param data - The data to be stored in the new node.
     */
    LinkedList.prototype.insertAfter = function (nodeData, data) {
        if (!nodeData) {
            console.error("you need to enter data of the node you want to insert after");
            return;
        }
        if (!data) {
            console.error("you need to enter data to insert");
            return;
        }
        // find the node with the given data
        var node = this.find(nodeData);
        if (!node) {
            console.error("Error: the given node {".concat(nodeData, "} is not on the list"));
            return;
        }
        // Create a new node with the given data
        var newNode = new LinkedListNode(data);
        // Set the next pointer of the new node to the next node of the given node
        newNode.next = node.next;
        // Set the next pointer of the given node to the new node
        node.next = newNode;
        // If the given node is the tail of the list, update the tail pointer
        if (newNode.next === null) {
            this.tail = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.insertBefore = function (nodeData, data) {
        if (!nodeData) {
            console.error("you need to enter data of the node you want to insert before");
            return;
        }
        if (!data) {
            console.error("you need to enter data to insert");
            return;
        }
        // find the node with the given data
        var node = this.find(nodeData);
        if (!node) {
            console.error("Error: the given node {".concat(nodeData, "} is not on the list"));
            return;
        }
        var newNode = new LinkedListNode(data);
        newNode.next = node;
        var parentNode = this.findParent(node);
        if (!parentNode) {
            this.head = newNode;
        }
        else {
            parentNode.next = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.deleteNode = function (nodeData) {
        if (!nodeData) {
            console.error("you need to enter Data of the node you want to delete");
            return;
        }
        // find the node with the given data
        var node = this.find(nodeData);
        if (!node) {
            console.error("Error: the given node {".concat(nodeData, "} is not on the list"));
            return;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else if (this.head === node) {
            this.head = this.head.next;
        }
        else {
            var parentNode = this.findParent(node);
            if (!parentNode)
                return;
            if (this.tail === node) {
                this.tail = parentNode;
            }
            else {
                parentNode.next = node.next;
            }
        }
        this.length--;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
