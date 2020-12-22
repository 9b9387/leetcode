function optimalDivision(nums: number[]): string {
    if (nums.length == 1)
        return nums[0] + "";
    if (nums.length == 2)
        return nums[0] + "/" + nums[1];
    let str = nums[0] + "/(" + nums[1];
    for (let i = 2; i < nums.length; i++) {
        str += "/";
        str += nums[i];
    }
    str += ")";
    return str;
};

export { optimalDivision }