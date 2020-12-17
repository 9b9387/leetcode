import 'mocha';
import { assert } from 'chai';
import { TreeNode, hasPathSum } from './hasPathSum';

function createTree(input: number[]) : TreeNode | null{
    let q:TreeNode[] = [];

    let val = input.shift();
    if(val == null)
    {
        return null;
    }

    let node = new TreeNode(val, null, null);
    q.push(node);

    while(q.length > 0)
    {
        let n = q.shift();
        let left_val = input.shift();
        if(n!= null && left_val != null)
        {
            n.left = new TreeNode(left_val, null, null);
            q.push(n.left);
        }

        let right_val = input.shift();
        if(n!= null && right_val != null)
        {
            n.right = new TreeNode(right_val, null, null);
            q.push(n.right);
        }
    }
    return node;
}

describe("112_hasPathSum", function () {
    it("case1", function () {
        let input: any[] = [5,4,8,11,null,13,4,7,2,null,null,null,1];
        let sum = 22;
        let root = createTree(input);
        assert.equal(hasPathSum(root, sum), true);
    });

    it("case2", function () {
        let input: any[] = [1, 2];
        let sum = 3;
        let root = createTree(input);
        assert.equal(hasPathSum(root, sum), true);
    });
});


