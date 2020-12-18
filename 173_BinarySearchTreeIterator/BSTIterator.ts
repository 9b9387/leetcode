import { TreeNode } from "../common/TreeNode";

class BSTIterator {
    array: number[] = []

    constructor(root: TreeNode | null) {
        this.search(root);
        this.array = this.array.sort((a, b) => { return a - b; });
    }

    search(node: TreeNode | null) {
        if (node == null) {
            return;
        }
        this.array.push(node.val);

        if (node.left == null && node.right == null) {
            return;
        }
        if (node.left != null) {
            this.search(node.left);
        }

        if (node.right != null) {
            this.search(node.right);
        }
    }

    next(): number | undefined {
        return this.array.shift();
    }

    hasNext(): boolean {
        return this.array.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

export { BSTIterator }