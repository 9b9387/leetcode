function frequencySort(s: string): string {
    let map: Map<string, number> = new Map<string, number>();

    for (let c of s) {
        map.set(c, (map.get(c) ?? 0) + 1);
    }

    return s.split('')
        .sort((a, b) => {
               return (map.get(b) ?? 0) - (map.get(a) ?? 0) 
                   || b.charCodeAt(0) - a.charCodeAt(0)
        }).join('')
};