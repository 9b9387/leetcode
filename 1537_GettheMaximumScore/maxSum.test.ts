import 'mocha';
import { assert } from 'chai';
import { maxSum } from './maxSum';

describe("1537_GettheMaximumScore", function () {
    let ret = maxSum([2,4,5,8,10], [4,6,8,9]);
    assert.equal(ret, 30);
})