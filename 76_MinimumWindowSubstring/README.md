Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"
 

Constraints:

1 <= s.length, t.length <= 105
s and t consist of English letters.
 

Follow up: Could you find an algorithm that runs in O(n) time?

------
思路：这题的解法叫滑动窗口，定义一个左值索引和一个右值索引。
- 右索引增加，直到满足条件，记录最小长度。
- 左值增加，直到不满足条件。
- 重复上面的步骤，到索引结束，返回最小长度。

算法比较容易理解，这题难在如何判断满足条件。之前的一个写法用双循环s和t去检测字符数量。结果导致了计算超时。

参考了其他人的做法，用一个count代表还需要查找几种字符，用一个map保存每种字符的数量。

- 计算t内的count和map
- 当count==0时，说明满足条件
- 当左值增加时，如果移除的字符包含在map内
    - 如果该字符map内的数量==0，count+1
    - map内该字符的数量+1
- 当右值增加时，如果移动的字符包含在map内
    - map内该字符的数量-1
    - 如果map内该字符的数量==0 count-1