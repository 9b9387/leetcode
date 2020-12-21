import 'mocha';
import { assert } from 'chai';
import { largestOverlap } from './largestOverlap';

describe("835_ImageOverlap", function () {
    it("case1", function () {
        let nums1 = [[1,1,0],[0,1,0],[0,1,0]]
        let nums2 = [[0,0,0],[0,1,1],[0,0,1]]
        var result = largestOverlap(nums1, nums2);
        assert.equal(result, 3);
    });

    it("case2", function () {
        let nums1 = [[0]]
        let nums2 = [[0]]
        var result = largestOverlap(nums1, nums2);
        assert.equal(result, 0);
    });

    it("case3", function () {
        let nums1 = [[1]]
        let nums2 = [[1]]
        var result = largestOverlap(nums1, nums2);
        assert.equal(result, 1);
    });

    it("case4", function () {
        let nums1 = [[0,1],[1,1]]
        let nums2 = [[1,1],[1,0]]
        var result = largestOverlap(nums1, nums2);
        assert.equal(result, 2);
    });
});