function prefixesDivBy5(A: number[]): boolean[] {
    var res: boolean[] = [];
    var n = 0;
    for (let i = 0; i < A.length; i++) {
        n = ((n << 1) + A[i]) % 10;
        res.push(n === 5 || n === 0);
    }
    return res;
};

export { prefixesDivBy5 }