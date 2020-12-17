class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function hasPathSum(root: TreeNode | null, sum: number): boolean {
    if(root == null)
    {
        return false;
    }
    return searchPath(root, 0, sum);
};

function searchPath(node: TreeNode, totalSum: number, target: number): boolean {
    totalSum += node.val

    if(node.left != null && searchPath(node.left, totalSum, target) == true)
    {
        return true;
    }

    if(node.right != null && searchPath(node.right, totalSum, target) == true)
    {
        return true;
    }
    
    if(node.left == null && node.right == null)
    {
        return totalSum == target;
    }

    return false;
}

export { TreeNode, hasPathSum }