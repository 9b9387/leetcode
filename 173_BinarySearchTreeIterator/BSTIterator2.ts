import { TreeNode } from "../common/TreeNode";

class BSTIterator2 {
    array: number[] = []
    index: number = 0;

    constructor(root: TreeNode | null) {
        this.search(root);
        this.array = this.array.sort((a, b) => { return a - b; });
    }

    search(node: TreeNode | null) {
        if (node == null) {
            return;
        }
        this.search(node.left);
        this.array.push(node.val);
        this.search(node.right);
    }

    next(): number | undefined {
        let value = this.array[this.index];
        this.index++;
        return value;
    }

    hasNext(): boolean {
        return this.index < this.array.length;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

export { BSTIterator2 }