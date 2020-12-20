Given an array of integers arr and an integer d. In one step you can jump from index i to index:

i + x where: i + x < arr.length and 0 < x <= d.
i - x where: i - x >= 0 and 0 < x <= d.
In addition, you can only jump from index i to index j if arr[i] > arr[j] and arr[i] > arr[k] for all indices k between i and j (More formally min(i, j) < k < max(i, j)).

You can choose any index of the array and start jumping. Return the maximum number of indices you can visit.

Notice that you can not jump outside of the array at any time.

 

Example 1:

```
Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
Output: 4
```
Explanation: You can start at index 10. You can jump 10 --> 8 --> 6 --> 7 as shown.
Note that if you start at index 6 you can only jump to index 7. You cannot jump to index 5 because 13 > 9. You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 > 9.
Similarly You cannot jump from index 3 to index 2 or index 1.
Example 2:
```
Input: arr = [3,3,3,3,3], d = 3
Output: 1
```
Explanation: You can start at any index. You always cannot jump to any index.
Example 3:

```
Input: arr = [7,6,5,4,3,2,1], d = 1
Output: 7
```
Explanation: Start at index 0. You can visit all the indicies. 
Example 4:
```
Input: arr = [7,1,7,1,7,1], d = 2
Output: 2
```
Example 5:
```
Input: arr = [66], d = 1
Output: 1
```

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 10^5
1 <= d <= arr.length

-------
思路：
- 根据条件arr[i] > arr[k] > arr[j] 收集全部路径 {key: 起点index, value: 可去index数组}
- 根据收集的数据递归查找最长路径，查找过程中缓存 {key: index, value: max_count}
开始的几次提交，没有缓存导致测试数据很多时 `Time Limit Exceeded`

二刷：
二刷是根据官方给出的解题思路 用`记忆化搜索`实现的，思路和一刷的缓存策略相似，不过省去了一刷时候收集的过程，只做索引的记数操作。效率比一刷高出将近8倍。
- 第一次访问i位置时设置计数为1，否则直接返回
- 在 `0 <= i - d <= j <= i + d < length` 范围内 递归j
- 如果 arr[i] > arr[j], i位置的计数取`seen[i], seen[j]`的最大值