There is an m by n grid with a ball. Given the start coordinate (i,j) of the ball, you can move the ball to adjacent cell or cross the grid boundary in four directions (up, down, left, right). However, you can at most move N times. Find out the number of paths to move the ball out of grid boundary. The answer may be very large, return it after mod 109 + 7.

 

Example 1:

Input: m = 2, n = 2, N = 2, i = 0, j = 0
Output: 6
Explanation:

Example 2:

Input: m = 1, n = 3, N = 3, i = 0, j = 1
Output: 12
Explanation:

 

Note:

Once you move the ball out of boundary, you cannot move it back.
The length and height of the grid is in range [1,50].
N is in range [0,50].
-------
思路：
暴力法： 超时

动态规划
- i, j刚好出界时，表示从i,j原路退回到[m, n]范围内，只有一种路线
- N == 0时，表示步数用完，这时如果没出界返回0 表示走了N步后，还没出界
- 到达i, j位置的路线，等于到达i, j相邻四个位置路线的和。
- 保存dp[N][x][y]=到达x,y的路线数量