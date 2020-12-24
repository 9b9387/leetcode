function minWindow(s: string, t: string): string {
    let frequency: any = {}
    let startIndex: number = 0;
    let length: number = 0;

    for (const c of t) {
        frequency[c] == null ? frequency[c] = 1 : frequency[c]++
    }

    var check = function() : boolean {
        let substr = s.substr(startIndex, length);
        for (const key in frequency) {
            let count = 0;
            for (let i = 0; i < substr.length; i++) {
                const c = substr[i];
                if(key == c)
                {
                    count++;
                }
            }
            if(count < frequency[key])
            {
                return false;
            }
        }
        return true;
    }

    var minLength = 0;
    var minIndex = 0;
    while(startIndex + length <= s.length)
    {
        while(check())
        {
            if(length < minLength || minLength == 0)
            {
                minLength = length;
                minIndex = startIndex;
            }
            length--;
            startIndex ++;
        }
        length++;
    }
    return s.substr(minIndex, minLength);;
};

export { minWindow }