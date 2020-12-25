function minWindow(s: string, t: string): string {
    let frequency: any = {}
    let startIndex: number = 0;
    let length: number = -1;
    let count: number = 0; // 还有几种字母没找全
    for (const c of t) {
        if(frequency[c] == null)
        {
            frequency[c] = 0; 
            count++;
        } 
        frequency[c]++;    
    }

    var minLength = 0;
    var minIndex = 0;
    while(startIndex + length <= s.length)
    {
        if(count == 0) // 全包含了
        {
            // console.log(s.substr(startIndex, length));
            if(length + 1 < minLength || minLength == 0)
            {
                minLength = length + 1;
                minIndex = startIndex;
            }
            var current = s[startIndex];
            if(frequency[current] != null)
            {
                frequency[current]++;
            }
            if(frequency[current] > 0)
            {
                count++;
            }
            length--;
            startIndex++;
        }
        else
        {
            length++;

            var current = s[startIndex + length];
            if(frequency[current] != null)
            {
                frequency[current]--;
                if(frequency[current] == 0)
                {
                    count--;
                }
            }
        }
    }
    return s.substr(minIndex, minLength);;
};

export { minWindow }