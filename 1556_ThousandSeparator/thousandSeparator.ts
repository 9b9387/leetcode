function thousandSeparator(n: number): string {
    var strn = n + "";
    if(strn.length <= 3)
    {
        return strn;
    }

    var arr = strn.split("");
    arr.reverse();

    var temp = []
    for (let i = 0; i < arr.length; i+=3) {
        let end = i + 3;
        if(end > arr.length)
        {
            end = arr.length;
        }
        let v = arr.slice(i, end);
        temp.push(v.reverse().join(""));
    }

    return temp.reverse().join(".");
};

export {thousandSeparator}