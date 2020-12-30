function majorityElement(nums: number[]): number {
    let num = nums[0]
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            num = nums[i]
            count = 1;
            continue;
        }
        if (nums[i] == num) {
            count++;
        }
        else {
            count--;
        }
    }
    return num;
};

export { majorityElement }