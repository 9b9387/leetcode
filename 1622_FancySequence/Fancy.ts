class Fancy {
    private sequence = new Array<number>();
    constructor() {
    }

    append(val: number): void {
        this.sequence.push(val);
    }

    addAll(inc: number): void {
        for (let i = 0; i < this.sequence.length; i++) {
            this.sequence[i] += inc;
            this.sequence[i] %= 1000000007
        }
    }

    multAll(m: number): void {
        for (let i = 0; i < this.sequence.length; i++) {
            this.sequence[i] *= m;
            this.sequence[i] %= 1000000007
        }
    }

    getIndex(idx: number): number {
        if(this.sequence.length == 0 || idx >= this.sequence.length)
        {
            return -1;
        }
        return this.sequence[idx] ?? -1;
    }
}
/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */

export {Fancy}