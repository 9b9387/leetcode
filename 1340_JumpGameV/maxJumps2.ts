function maxJumps(arr: number[], d: number): number {
    let seen: Map<number, number> = new Map<number, number>();

    function dfs(pos: number)
    {
        if(seen.has(pos))
        {
            return;
        }

        seen.set(pos, 1);
        
        let i : number = pos - 1;
        while (i >= 0 && pos - i <= d && arr[pos] > arr[i])
        {
            dfs(i);
            seen.set(pos, Math.max(seen.get(pos) as number, seen.get(i) as number + 1));
            i -= 1;
        }

        i = pos + 1;
        while (i < arr.length && i - pos <= d && arr[pos] > arr[i])
        {
            dfs(i);
            seen.set(pos, Math.max(seen.get(pos) as number, seen.get(i) as number + 1))
            i += 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        dfs(i)
    }
    return Math.max(...seen.values());
}

export {maxJumps}