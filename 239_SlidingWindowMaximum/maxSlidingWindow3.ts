import { MonotoneQueue } from "../common/MonotoneQueue/MonotoneQueue";

function maxSlidingWindow(nums: number[], k: number): number[] {
    let q: MonotoneQueue<number> = new MonotoneQueue<number>();
    let ret: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        q.push(nums[i]);

        if (i >= k - 1) {
            ret.push(q.max())
        }

        if (nums[i - k + 1] == q.max()) {
            q.pop();
        }
    }

    return ret;
};

export { maxSlidingWindow }