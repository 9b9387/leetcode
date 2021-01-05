You are given two sorted arrays of distinct integers nums1 and nums2.

A valid path is defined as follows:

Choose array nums1 or nums2 to traverse (from index-0).
Traverse the current array from left to right.
If you are reading any value that is present in nums1 and nums2 you are allowed to change your path to the other array. (Only one repeated value is considered in the valid path).
Score is defined as the sum of uniques values in a valid path.

Return the maximum score you can obtain of all possible valid paths.

Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:



Input: nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]
Output: 30
Explanation: Valid paths:
[2,4,5,8,10], [2,4,5,8,9], [2,4,6,8,9], [2,4,6,8,10],  (starting from nums1)
[4,6,8,9], [4,5,8,10], [4,5,8,9], [4,6,8,10]    (starting from nums2)
The maximum is obtained with the path in green [2,4,6,8,10].
Example 2:

Input: nums1 = [1,3,5,7,9], nums2 = [3,5,100]
Output: 109
Explanation: Maximum sum is obtained with the path [1,3,5,100].
Example 3:

Input: nums1 = [1,2,3,4,5], nums2 = [6,7,8,9,10]
Output: 40
Explanation: There are no common elements between nums1 and nums2.
Maximum sum is obtained with the path [6,7,8,9,10].
Example 4:

Input: nums1 = [1,4,5,8,9,11,19], nums2 = [2,3,4,11,12]
Output: 61
 

Constraints:

1 <= nums1.length <= 10^5
1 <= nums2.length <= 10^5
1 <= nums1[i], nums2[i] <= 10^7
nums1 and nums2 are strictly increasing.

--------
思路：
双指针贪心算法

使用双指针分别走两条路 nums1 和 nums2，两条路径各自的和记作 sum1 和 sum2，遇到一个岔口时，将 sum1 和 sum2 更新为两者的较大值，继续走 nums1 和 nums2，最后返回两条路径的较大值即可。

- 使用双指针 i, j 分别从头开始遍历数组 nums1 和 nums2, 各自当前的 sum 记作 sum1, sum2
- 两个指针该如何移动？为了使两个指针能够在岔口相遇，我们利用数组的有序性，每次让值较小的指针向前移动一步。
- 在岔口时，我们将 sum1 和 sum2 赋值为两者中的较大者（贪心），再加上当前岔口的值，让两个指针都向前一步（可以理解为以此岔口为新的起点，并将基础值更新为此前两条路径较大的和，重新出发）。
- 这样循环往复，直到一条路径走到尽头。
- 两条路径，有一方有可能还没走完，因此我们给其加上数组中剩余的数字。