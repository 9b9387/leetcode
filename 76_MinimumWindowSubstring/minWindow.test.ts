import 'mocha';
import { assert } from 'chai';
import { minWindow } from './minWindow';

describe("76_MinimumWindowSubstring", function () {
    it("case1", function () {
        let s = "ADOBECODEBANC";
        let t = "ABC";
        var result = minWindow(s, t);
        // assert.equal(result, "BANC");
    });
});