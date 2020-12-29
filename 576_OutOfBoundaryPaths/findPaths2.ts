function findPaths(m: number, n: number, N: number, i: number, j: number): number {
    let memo: number[][][] = [];
    let MOD = 1000000007;

    // 初始化记忆数组
    for (let i = 0; i < N + 1; i++) {
        let data = [];
        for (let j = 0; j < m; j++) {
            let tmp = Array(n).fill(-1);
            data.push(tmp);
        }
        memo.push(data);
    }

    const dfs = (N: number, x: number, y: number) => {
        // 出界时返回1，表示只有一种路线
        if (x < 0 || x >= m || y < 0 || y >= n) {
            return 1;
        }

        // 步数用尽
        if (N == 0) {
            return 0;
        }

        // 返回记忆值
        if (memo[N][x][y] != -1) {
            return memo[N][x][y];
        }

        let res = 0;
        // 搜索邻居，状态转移
        res += dfs(N - 1, x + 1, y);
        res += dfs(N - 1, x - 1, y);
        res += dfs(N - 1, x, y + 1);
        res += dfs(N - 1, x, y - 1);
        res %= MOD;

        return memo[N][x][y] = res;
    };

    return dfs(N, i, j);
}

export { findPaths }