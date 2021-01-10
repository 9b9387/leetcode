import 'mocha';
import { assert } from 'chai';
import { summaryRanges } from './summaryRanges';

describe("288_SummaryRanges", function () {
    it("case1", function () {
        let nums = [0,1,2,4,5,7]
        let result = summaryRanges(nums);
        assert.sameDeepMembers(["0->2","4->5","7"], result);
    });

    it("case2", function () {
        let nums = [0,2,3,4,6,8,9]
        let result = summaryRanges(nums);
        assert.sameDeepMembers(["0","2->4","6","8->9"], result);
    });

    it("case3", function () {
        let result1 = summaryRanges([]);
        assert.sameDeepMembers([], result1);

        let result2 = summaryRanges([1]);
        assert.sameDeepMembers(["1"], result2);
    });
});