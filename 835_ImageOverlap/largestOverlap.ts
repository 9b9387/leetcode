function largestOverlap(img1: number[][], img2: number[][]): number {
    let n = img1.length;
    let map: Map<number, number> = new Map<number, number>();
    for (let j1 = 0; j1 < n; j1++) {
        for (let i1 = 0; i1 < n; i1++) {
            const v1 = img1[j1][i1];
            if (v1 == 1) {
                for (let j2 = 0; j2 < n; j2++) {
                    for (let i2 = 0; i2 < n; i2++) {
                        const v2 = img2[j2][i2];
                        if (v1 == v2) {
                            let index = (j2 - j1) * n * n + (i2 - i1);
                            let count = map.get(index);
                            if (count == null) {
                                count = 0;
                            }
                            count++;
                            map.set(index, count);
                        }
                    }
                }
            }
        }
    }

    return Math.max(...map.values(), 0)
}

export { largestOverlap }