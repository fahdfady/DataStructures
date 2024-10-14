"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var queue_1 = require("./queue");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        var newNode = new TreeNode(data);
        if (this.root === null)
            this.root = newNode;
        var q = new queue_1.Queue();
        q.enqueue(this.root);
        do {
            var currentNode = q.dequeue();
            console.log("".concat(currentNode, " -> "));
            if (currentNode.left)
                q.enqueue(currentNode.left);
            else
                currentNode.left = newNode;
            if (currentNode.right)
                q.enqueue(currentNode.right);
            else
                currentNode.right = newNode;
        } while (!q.isEmpty());
    };
    BinaryTree.prototype.depthOf = function (u) {
        var d = 0;
        do {
            u = u.parent;
            d = d + 1;
        } while (u !== this.root);
        return d;
    };
    BinaryTree.prototype.height = function () {
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
    }
    return TreeNode;
}());
