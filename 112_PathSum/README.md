Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

----
解题思路：
递归遍历，累加各个节点的值。到叶节点时判断经过的各个节点的和是否等于sum

测试中写了一个层序创建二叉树的方法
实现方式，用一个队列保存当前层的所有节点，然后按顺序遍历，再赋值左右子节点。