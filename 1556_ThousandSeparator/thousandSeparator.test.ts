import 'mocha';
import { assert } from 'chai';
import { thousandSeparator } from './thousandSeparator';

describe("1556_thousandSeparator", function () {
    it("case1", function () {
        var input = 1
        assert.equal(thousandSeparator(input), "1");
    });

    it("case2", function () {
        var input = 123
        assert.equal(thousandSeparator(input), "123");
    });

    it("case3", function () {
        var input = 1234
        assert.equal(thousandSeparator(input), "1.234");
    });

    it("case4", function () {
        var input = 12345
        assert.equal(thousandSeparator(input), "12.345");
    });

    it("case5", function () {
        var input = 123456
        assert.equal(thousandSeparator(input), "123.456");
    });

    it("case6", function () {
        var input = 1234567
        assert.equal(thousandSeparator(input), "1.234.567");
    });
});