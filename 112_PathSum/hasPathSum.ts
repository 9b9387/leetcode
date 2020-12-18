import { TreeNode } from "../common/TreeNode";

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