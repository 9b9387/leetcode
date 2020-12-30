import 'mocha';
import { assert } from 'chai';
import { lastStoneWeight } from './lastStoneWeight';

describe("1046_lastStoneWeight", function () {
    it("case1", function () {
        let input = [8, 10, 4];
        assert.equal(lastStoneWeight(input), 2);
    });

    it("case2", function () {
        let input = [2,7,4,1,8,1];
        assert.equal(lastStoneWeight(input), 1);
    });
})