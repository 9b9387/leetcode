
Given a list of positive integers, the adjacent integers will perform the float division. For example, [2,3,4] -> 2 / 3 / 4.

However, you can add any number of parenthesis at any position to change the priority of operations. You should find out how to add parenthesis to get the maximum result, and return the corresponding expression in string format. Your expression should NOT contain redundant parenthesis.

Example:
Input: [1000,100,10,2]
Output: "1000/(100/10/2)"
Explanation:
1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/((100/10)/2)" are redundant, 
since they don't influence the operation priority. So you should return "1000/(100/10/2)". 

Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2
Note:

The length of the input array is [1, 10].
Elements in the given array will be in range [2, 1000].
There is only one optimal division for each test case.

---------
这题其实是个数学问题，和算法关系不大。用算法实现就是暴力穷举。
简化一下问题：
对于[a, b, c, d]，我们需要最小化 `b/c/d`，有两种情况：
b/(c/d) 和 (b/c)/d
化简后：
d 和 1/d
显然，对于`d > 1`时，b/(c/d)为最小，同理[a,b,c,d,e,f,...]
所以固定格式 a/(b/c/d/e/f/...)最大