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

// 第二种解法：
// var Fancy = function() {
//     this.ary = [] // 新建空数组
//     this.hint = [] // 存储修改数组的记录
//     this.getAry = [] // 存储重复取值
//     this.pow = Math.pow(10, 9)+7
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// Fancy.prototype.append = function(val) {
//     this.ary.push(val)
// };

// /** 
//  * @param {number} inc
//  * @return {void}
//  */
// Fancy.prototype.addAll = function(inc) {
//     this.hint.push(['+', inc, this.ary.length])
// };

// /** 
//  * @param {number} m
//  * @return {void}
//  */
// Fancy.prototype.multAll = function(m) {
//     this.hint.push(['*', m, this.ary.length])
// };

// /** 
//  * @param {number} idx
//  * @return {number}
//  */
// Fancy.prototype.getIndex = function(idx) {
//     if(idx >= this.ary.length) return -1
//     if(this.ary.length == this.getAry[1] && this.getAry[0] == this.hint.length && this.getAry[3] == idx) return this.getAry[2]
//     let n = this.ary[idx]
//     for(let [h, num, l] of this.hint) {
//         if(idx >= l) continue
//         if(h == '+') {
//             n += num
//         }else{
//             n *= num
//         }
//         n %= this.pow
//     }
//     this.getAry = [this.hint.length, this.ary.length, n, idx]
//     return n
// };

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */

export {Fancy}