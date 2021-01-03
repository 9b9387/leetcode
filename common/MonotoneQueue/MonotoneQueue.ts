class MonotoneQueue<T> {
    private data: T[] = [];

    public push(v: T) {
        while (this.data.length > 0 && this.data[this.data.length - 1] < v) {
            this.data.pop();
        }

        this.data.push(v);
    }

    public pop(): T | null {
        return this.data.shift() ?? null;
    }

    public max(): T {
        return this.data[0];
    }
}

export { MonotoneQueue }