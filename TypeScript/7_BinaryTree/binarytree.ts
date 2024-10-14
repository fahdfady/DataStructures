import { Queue } from "./queue";

type Node<T> = {
    data: T;
    left: Node<T> | null;
    right: Node<T> | null;
};

class NodeInfo<T> {
    node: Node<T>;
    text: string;
    startPos: number;
    get size(): number { return this.text.length; }
    get endPos(): number { return this.startPos + this.size; }
    set endPos(value: number) { this.startPos = value - this.size; }
    parent: NodeInfo<T> | null;
    left: NodeInfo<T> | null;
    right: NodeInfo<T> | null;

    constructor(node: Node<T>) {
        this.node = node;
        //@ts-ignore
        this.text = node.data.toString();
        this.startPos = 0;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree<T> {
    private root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    public insert(data: T) {
        const newNode: Node<T> = { data, left: null, right: null };

        if (this.root === null) {
            this.root = newNode;
            console.log(`Inserted root: ${data}`);
            return;
        }
        let q = new Queue();
        q.enqueue(this.root);

        while (!q.isEmpty()) {
            let currentNode: Node<T> = q.dequeue();
            if (currentNode) {
                console.log(`Visiting: ${currentNode.data}`);

                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    console.log(`Inserted ${data} as left child of ${currentNode.data}`);
                    break;
                } else {
                    q.enqueue(currentNode.left);
                }

                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    console.log(`Inserted ${data} as right child of ${currentNode.data}`);
                    break;
                } else {
                    q.enqueue(currentNode.right);
                }
            }
        }
    }

    depthOf(u) {
        let d = 0;
        do {
            u = u.parent;
            d = d + 1;
        } while (u !== this.root);

        return d
    }

    height() {


    }
    public simplePrint(): void {
        this.printNode(this.root, 0);
    }

    private printNode(node: Node<T> | null, level: number): void {
        if (node === null) return;

        console.log("  ".repeat(level) + node.data);
        this.printNode(node.left, level + 1);
        this.printNode(node.right, level + 1);
    }

}


class TreeNode<TData> {
    public data: TData;
    public left: Node<TData>
    public right: Node<TData>

    constructor(data: TData) {
        this.data = data
    }

}