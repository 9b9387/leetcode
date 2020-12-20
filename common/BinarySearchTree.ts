import { TreeNode } from "./TreeNode";
class BinarySearchTree {
    private root: TreeNode | null = null;

    constructor() {
    }

    search(node: TreeNode | null, value: number): TreeNode | null {
        if (node == null) {
            return null;
        }
        else if (value == node.val) {
            return node;
        }
        else if (value < node.val) {
            return this.search(node.left, value);
        }
        else if (value > node.val) {
            return this.search(node.right, value);
        }
        return null;
    }

    public insert(value: number) {
        if (this.root == null) {
            this.root = new TreeNode(value);
            return;
        }

        this._insert(this.root, value);
    }

    private _insert(node: TreeNode | null, value: number) {
        if (node == null) {
            return;
        }

        if (value == node.val) {
            return;
        }
        else if (value < node.val) {
            if (node.left == null) {
                node.left = new TreeNode(value);
                return;
            }
            else {
                this._insert(node.left, value);
            }
        }
        else if (value > node.val) {
            if (node.right == null) {
                node.right = new TreeNode(value);
                return;
            }
            else {
                this._insert(node.right, value);
            }
        }
    }

    public in_order() {
        this._in_order(this.root);
    }

    private _in_order(node: TreeNode | null) {
        if (node == null) {
            return;
        }

        this._in_order(node.left);
        console.log(node.val);
        this._in_order(node.right);
    }

    public delete(value: number) {
        this._delete(this.root, value);
    }

    private _delete(node: TreeNode | null, value: number): TreeNode | null {
        if (node == null) {
            return node;
        }

        if (value < node.val) {
            node.left = this._delete(node.left, value);
        }
        else if (value > node.val) {
            node.right = this._delete(node.right, value);
        }
        else {
            if (node.left == null && node.right == null) {
                return null;
            }
            else if (node.left != null && node.right == null) {
                node = node.left
                return node;
            }
            else if (node.left == null && node.right != null) {
                node = node.right
                return node;
            }
            else if (node.left != null && node.right != null) {
                // 替换左子树中最大的节点
                var leftMax = this._max(node.left)
                if(leftMax != null)
                {
                    node.val = leftMax.val;
                    node.left = this._delete(node.left, leftMax.val)
                }
                // 或者替换右子树中最小的节点
                // var rightMin = this.min(node.right)
                // if(rightMin != null)
                // {
                //     node.val = rightMin.val;
                //     node.right = this._delete(node.right, rightMin.val);
                // }
                return node;
            }
        }

        return node;
    }

    min() : TreeNode | null {
        return this._min(this.root);
    }

    private _min(node: TreeNode | null) : TreeNode | null{
        if(node == null)
        {
            return null;
        }

        if(node.left != null)
        {
            return this._min(node.left)
        }
        else
        {
            return node;
        }
    }

    max() : TreeNode | null {
        return this._max(this.root);
    }

    private _max(node: TreeNode | null) : TreeNode | null{
        if(node == null)
        {
            return null;
        }

        if(node.right != null)
        {
            return this._max(node.right)
        }
        else
        {
            return node;
        }
    }
}

export { BinarySearchTree }