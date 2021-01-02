function maxSlidingWindow(nums: number[], k: number): number[] {
    let start = 0;
    let end = start + k;
    let result = [];
    while (end <= nums.length) {
        let max = Math.max(...nums.slice(start, end));
        result.push(max);
        start++;
        end++;
    }
    return result
};

export { maxSlidingWindow }