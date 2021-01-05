function maxSum(nums1: number[], nums2: number[]): number {
    let i1 = 0;
    let i2 = 0;
    let sum1 = 0;
    let sum2 = 0;
    while(i1 < nums1.length && i2 < nums2.length)
    {
        if(nums1[i1] < nums2[i2])
        {
            sum1 += nums1[i1]
            i1++
        }
        else if(nums1[i1] > nums2[i2])
        {
            sum2 += nums2[i2];
            i2++;
        }
        else
        {
            sum1 += nums1[i1];
            sum2 += nums2[i2];
            sum1 = Math.max(sum1, sum2)
            sum2 = sum1
            i1++;
            i2++;
        }
    }
    for (let i = i1; i < nums1.length; i++) {
        sum1 += nums1[i];
    }

    for (let i = i2; i < nums2.length; i++) {
        sum2 += nums2[i];
    }

    return Math.max(sum1, sum2) % 1000000007;
};

export{maxSum}