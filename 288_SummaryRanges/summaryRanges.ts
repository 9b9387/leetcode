function summaryRanges(nums: number[]): string[] {
    if(nums.length == 0)
    {
        return []
    }

    let res = [];
    let last = nums.shift() as number;
    let str = last + "";
    let isBreak = false;
    let count = 0;
    while(nums.length > 0)
    {
        var num = nums.shift() as number;
        if(num - last == 1)
        {
            isBreak = false;
            count ++;
        }
        else
        {
            isBreak = true;
            if(count == 0)
            {
                res.push(last+"");
            }
            else
            {
                str += "->"
                str += last;
                res.push(str)
            }
            str = num + "";
            count = 0;
        }
        last = num;

        if(nums.length == 0)
        {
            if(count > 0)
            {
                str += "->"
                str += last;
            }
        }
    }
    res.push(str)
    return res;
};

export { summaryRanges }