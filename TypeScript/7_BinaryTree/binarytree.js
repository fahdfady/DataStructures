"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var queue_1 = require("./queue");
var NodeInfo = /** @class */ (function () {
    function NodeInfo(node) {
        this.node = node;
        //@ts-ignore
        this.text = node.data.toString();
        this.startPos = 0;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
    Object.defineProperty(NodeInfo.prototype, "size", {
        get: function () { return this.text.length; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeInfo.prototype, "endPos", {
        get: function () { return this.startPos + this.size; },
        set: function (value) { this.startPos = value - this.size; },
        enumerable: false,
        configurable: true
    });
    return NodeInfo;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        var newNode = { data: data, left: null, right: null };
        if (this.root === null) {
            this.root = newNode;
            console.log("Inserted root: ".concat(data));
            return;
        }
        var q = new queue_1.Queue();
        q.enqueue(this.root);
        while (!q.isEmpty()) {
            var currentNode = q.dequeue();
            if (currentNode) {
                console.log("Visiting: ".concat(currentNode.data));
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    console.log("Inserted ".concat(data, " as left child of ").concat(currentNode.data));
                    break;
                }
                else {
                    q.enqueue(currentNode.left);
                }
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    console.log("Inserted ".concat(data, " as right child of ").concat(currentNode.data));
                    break;
                }
                else {
                    q.enqueue(currentNode.right);
                }
            }
        }
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
    BinaryTree.prototype.simplePrint = function () {
        this.printNode(this.root, 0);
    };
    BinaryTree.prototype.printNode = function (node, level) {
        if (node === null)
            return;
        console.log("  ".repeat(level) + node.data);
        this.printNode(node.left, level + 1);
        this.printNode(node.right, level + 1);
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
