Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

----------
trie 又称前缀树或字典树。
是一种典型的空间换时间数据结构。
常见应用有:

- 自动补全
- 拼写检测

大量数据的情况下，Trie树优于哈希表。

特点：
- 可以找到具有同一前缀的全部键值
- 按词典序枚举字符串的数据集

操作：
- 插入
    - 链接存在。沿着链接移动到树的下一个子层。算法继续搜索下一个键字符。
    - 链接不存在。创建一个新的节点，并将它与父节点的链接相连，该链接与当前的键字符相匹配。
    - 重复以上步骤，直到到达键的最后一个字符，然后将当前节点标记为结束节点，算法完成。
- 查找
    - 存在链接。我们移动到该链接后面路径中的下一个节点，并继续搜索下一个键字符。    
    - 不存在链接。若已无键字符，且当前结点标记为 isEnd，则返回 true。否则有两种可能，均返回 false :
        - 还有键字符剩余，但无法跟随 Trie 树的键路径，找不到键。
        - 没有键字符剩余，但当前结点没有标记为 isEnd。也就是说，待查找键只是Trie树中另一个键的前缀。