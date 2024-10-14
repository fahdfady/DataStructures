import { Queue } from "./queue";

type Node<T> = {
    data: T,
    left: Node<T>,
    right: Node<T>,
    // parent: T,
}

export class BinaryTree<T> {
    private root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    public insert(data: T) {
        let newNode = new TreeNode(data);
        if (this.root === null) this.root = newNode;

        let q = new Queue();
        q.enqueue(this.root);

        do {
            let currentNode: Node<T> = q.dequeue();
            console.log(`${currentNode} -> `);

            if (currentNode.left) q.enqueue(currentNode.left); else currentNode.left = newNode;
            if (currentNode.right) q.enqueue(currentNode.right); else currentNode.right = newNode;
        } while (!q.isEmpty());
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

}


class TreeNode<TData> {
    public data: TData;
    public left: Node<TData>
    public right: Node<TData>

    constructor(data: TData) {
        this.data = data
    }

}