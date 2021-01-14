You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given pairs any number of times.

Return the lexicographically smallest string that s can be changed to after using the swaps.

 

Example 1:

Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
Example 2:

Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
Example 3:

Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"
 

Constraints:

1 <= s.length <= 10^5
0 <= pairs.length <= 10^5
0 <= pairs[i][0], pairs[i][1] < s.length
s only contains lower case English letters.
-------
思路：
首先，这题是连通性问题，所以要使用并查集。然后涉及到一个排序，适合用优先队列。
所以打算先实现一个二叉堆的优先队列后，再来解这道题。

实现了二叉堆和优先队列后。
- 首先对pairs建立并查集
- 建立哈希表，缓存每个字符的代表元和代表元对应的优先队列。
- 循环字符串，从并查集中找到每个字符的代表元，然后再通过哈希表找到对应的优先队列，把当前字符插入优先队列内。优先队列保存代表元代表的字符结合。
- 遍历字符串，然后找到代表元对应的优先队列，执行出队操作。搜集所有出队的字符就是结果。

这题是并查集和数组排序的综合题型，还是很考验拆解问题的能力。