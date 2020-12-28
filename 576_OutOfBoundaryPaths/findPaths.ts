let C: number = 0;
let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function findPaths(m: number, n: number, N: number, i: number, j: number): number {
    C = 0;
    move(i, j, m, n, N, 0)
    return C;
};

function move(x: number, y: number, m: number, n: number, N: number, c: number)
{
    c++;

    if(c > N)
    {
        return;
    }
    
    for(let i = 0; i < dir.length; i++)
    {
        var step = dir[i];
        var x1 = x + step[0]
        var y1 = y + step[1]

        if(x1 < 0 || x1 >= m || y1 < 0 || y1 >= n)
        {
            C++;
        }
        else
        {
            move(x1, y1, m, n, N, c);
        }
    }
}

export { findPaths }