import 'mocha';
import { assert } from 'chai';
import { twoSum } from './twoSum';

describe("1_twoSum", function () {
    it("twoSum case1", function () {
        let nums = [2, 7, 11, 15]
        let target = 9
        var result = twoSum(nums, target);
        assert.equal(result.length, 2);
        assert.equal(nums[result[0]] + nums[result[1]], target);
    });

    it("twoSum case2", function () {
        let nums = [3, 2, 4]
        let target = 6
        var result = twoSum(nums, target);
        assert.equal(result.length, 2);
        assert.equal(nums[result[0]] + nums[result[1]], target);
    });

    it("twoSum case3", function () {
        let nums = [3, 3]
        let target = 6
        var result = twoSum(nums, target);
        assert.equal(result.length, 2);
        assert.equal(nums[result[0]] + nums[result[1]], target);
    });
});