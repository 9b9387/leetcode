import 'mocha';
import { assert } from 'chai';
import { MyCalendarTwo } from "./MyCalendarTwo";

describe("731_MyCalenderII", function () {
    it("case1", function () {
        let nums = [[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]
        var calendar = new MyCalendarTwo();
        assert.equal(calendar.book(10, 20), true)
        assert.equal(calendar.book(50, 60), true)
        assert.equal(calendar.book(10, 40), true)
        assert.equal(calendar.book(5, 15), false)
        assert.equal(calendar.book(5, 10), true)
        assert.equal(calendar.book(25, 55), true)
    });
});