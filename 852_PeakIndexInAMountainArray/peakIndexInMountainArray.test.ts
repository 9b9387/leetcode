import 'mocha';
import { assert } from 'chai';
import { peakIndexInMountainArray } from './peakIndexInMountainArray';

describe("852_PeakIndexInAMountainArray", function () {
    it("case1", function () {
        let input: number[] = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19];
        assert.equal(peakIndexInMountainArray(input), 2);
    });
})