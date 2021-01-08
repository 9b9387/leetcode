import { connect } from "http2";

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    nums.reverse();
    k %= nums.length;
    var result = nums.slice(0, k).reverse().concat(nums.slice(k, nums.length).reverse());

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};