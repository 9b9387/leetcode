import 'mocha';
import { assert } from 'chai';
import { maxSlidingWindow } from './maxSlidingWindow3';

describe("239_SlidingWindowMaximum", function () {
    it("case1", function () {
        let nums = [1,3,-1,-3,5,3,6,7]
        let k = 3
        var result = maxSlidingWindow(nums, k);
        assert.sameOrderedMembers(result, [3,3,5,5,6,7]);
    });
});