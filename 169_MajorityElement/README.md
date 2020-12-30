Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

------
思路：
- 取数组第一个数据作为主要元素，计数1
- 从index=1开始遍历
    - 如果count=0时，更换主要元素为当前值，计数为1，继续循环
    - 如果当前数字等于主要元素，计数+1
    - 如果不等于，计数-1
- 返回主要元素的值