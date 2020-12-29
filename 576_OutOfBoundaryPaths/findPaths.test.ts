import 'mocha';
import { assert } from 'chai';
import { findPaths } from './findPaths';
import { findPaths as findPaths2 } from './findPaths2';

describe("576_OutOfBoundaryPaths", function () {
    it("case1", function () {
        var result = findPaths(2, 2, 2, 0, 0);
        assert.equal(result, 6);

        // Time Limit Exceeded
        // var result = findPaths(8, 7, 16, 1,5);
        // assert.equal(result, 102984580);
    });

    it("case2", function () {
        var result = findPaths2(8, 7, 16, 1,5);
        assert.equal(result, 102984580);
    });
});