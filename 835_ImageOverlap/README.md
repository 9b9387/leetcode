You are given two images img1 and img2 both of size n x n, represented as binary, square matrices of the same size. (A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

 

Example 1:


Input: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
Output: 3
Explanation: We slide img1 to right by 1 unit and down by 1 unit.

The number of positions that have a 1 in both images is 3. (Shown in red)

Example 2:

Input: img1 = [[1]], img2 = [[1]]
Output: 1
Example 3:

Input: img1 = [[0]], img2 = [[0]]
Output: 0
 

Constraints:

n == img1.length
n == img1[i].length
n == img2.length
n == img2[i].length
1 <= n <= 30
img1[i][j] is 0 or 1.
img2[i][j] is 0 or 1.
-----
思路 看到题目第一反应就是穷举[-n, n]范围内的所有变换，然后取最大值。
然后看了一下官方给的两种思路，也都是穷举解法。但是第二种比较有趣，自己实现了一下。

- 在img1中遍历找出值是1的v1 索引j1, i1
- 在img2中遍历找到值是1的v2 索引j2, i2
- 如果(v1 == v2) 对索引 [j2 - j1, i2 - i1]，计数加1
- 返回计数最大的值