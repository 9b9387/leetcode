import 'mocha';
import { assert } from 'chai';
import { BinarySearchTree } from '../BinarySearchTree';

describe("tree test", function () {
    it("binary search tree", function () {
        let nodes : number[] = [62, 58, 88, 47, 73, 99, 35, 51, 93, 29, 37, 49, 56, 36, 48, 50];
        var tree = new BinarySearchTree();
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            tree.insert(node);
        }
        tree.in_order();
    });

    it("binary search tree delete1", function () {
        let nodes : number[] = [62, 58, 88, 47, 73, 99, 35, 51, 93, 29, 37, 49, 56, 36, 48, 50];
        var tree = new BinarySearchTree();
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            tree.insert(node);
        }

        // 删除的是叶节点
        console.log("delete 50");
        tree.delete(50);
        tree.in_order();
        // 删除的只有一个节点
        console.log("delete 48");
        tree.delete(48);
        tree.in_order();
        // 删除的有两个节点
        console.log("delete 88");
        tree.delete(88);
        tree.in_order();
    });
});