class Comparator {
    private compare: Function;
    constructor(compareFunction: Function) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    private static defaultCompareFunction(a: number, b: number): number {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    public equal(a: number, b: number): boolean {
        return this.compare(a, b) === 0;
    }

    public lessThan(a: number, b: number): boolean {
        return this.compare(a, b) < 0;
    }

    public greaterThan(a: number, b: number): boolean {
        return this.compare(a, b) > 0;
    }

    public lessThanOrEqual(a: number, b: number): boolean {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    public greaterThanOrEqual(a: number, b: number): boolean {
        return this.greaterThan(a, b) || this.equal(a, b);
    }
}

export { Comparator }