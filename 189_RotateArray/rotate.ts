/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop() as number)
    }
};
export { rotate }