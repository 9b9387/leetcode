function maxJumps(arr: number[], d: number): number {
    let path: Map<number, number[]> = new Map<number, number[]>();
    for (let startIndex = 0; startIndex < arr.length; startIndex++) {
        let startValue = arr[startIndex];
        for (let endIndex = startIndex - d; endIndex <= startIndex + d; endIndex++) {
            if (endIndex < 0 || endIndex >= arr.length || startIndex == endIndex) {
                continue;
            }

            let min = Math.min(startIndex, endIndex);
            let max = Math.max(startIndex, endIndex);
            let flag = false;
            for (let k = min + 1; k < max; k++) {
                if (arr[k] >= Math.max(arr[min], arr[max])) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                continue;
            }

            var jumpValue = arr[endIndex];
            if (startValue <= jumpValue) {
                continue;
            }
            else {
                // console.log(startIndex + "->" + endIndex);
                if (path.has(startIndex)) {
                    path.get(startIndex)?.push(endIndex);
                }
                else {
                    path.set(startIndex, [endIndex]);
                }
            }
        }
    }

    let cache: Map<number, number> = new Map<number, number>();
    var maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        var c = jump(path, i, 0, cache);
        maxCount = Math.max(c, maxCount);
    }
    return maxCount + 1;
};

function jump(path: Map<number, number[]>, key: number, count: number, cache: Map<number, number>): number {
    var next_arr = path.get(key);
    if (next_arr == null) {
        return count;
    }
    else {
        count++;
        var c = count;
        var max_next = -1;
        let curcount = -1;

        for (let i = 0; i < next_arr.length; i++) {
            const next = next_arr[i];
            if (cache.has(next)) {
                var cacheCount = cache.get(next)
                if (cacheCount != null) {
                    count = Math.max(count, c + cacheCount);

                    if (max_next == -1 || curcount > count) {
                        max_next = next;
                        curcount = count;
                    }
                }
            }
            else {
                //count = Math.max(count, jump2(path, next, c));
                let curcount = jump(path, next, c, cache)
                if (max_next == -1 || curcount > count) {
                    max_next = next;
                    count = curcount;
                }
            }
        }
        if (max_next != -1) {
            cache.set(max_next, count - c);
        }
        return count;
    }
}

export { maxJumps }