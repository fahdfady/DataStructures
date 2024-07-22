"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var linkedlist_1 = require("./linkedlist");
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = new linkedlist_1.LinkedList();
    }
    Queue.prototype.enqueue = function (data) {
        this.list.insertLast(data);
    };
    Queue.prototype.dequeue = function () {
        if (!this.list.head)
            return;
        var nodeData = this.list.head.data;
        this.list.deleteHead();
        return nodeData;
    };
    Queue.prototype.peek = function () {
        if (!this.list.head)
            return;
        return this.list.head.data;
    };
    Queue.prototype.isEmpty = function () {
        if (this.list.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Queue.prototype.size = function () {
        return this.list.length;
    };
    Queue.prototype.print = function () {
        this.list.printList();
    };
    return Queue;
}());
exports.Queue = Queue;
