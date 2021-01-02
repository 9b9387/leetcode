function maxSlidingWindow(nums: number[], k: number): number[] {
    let q: number[] = [];
    let ret: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop(); // 清理小于nums[i]的位置
        }
        q.push(i); // 保存i到最后
        if(q[0] === i - k)
        {
            q.shift(); // 滑动，移除最左侧的索引
        }
        if(i >= k - 1)
        {
            ret.push(nums[q[0]]) // 从k开始，保存最大结果
        }
    }

    return ret;
};

export { maxSlidingWindow }