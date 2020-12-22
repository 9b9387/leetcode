class TrieNode {
    links: TrieNode[];
    end: boolean = false;
    constructor() {
        this.links = new Array<TrieNode>(26);
    }

    public contains(ch: string): boolean {
        return this.links[ch.charCodeAt(0)] != null;
    }

    public get(ch: string): TrieNode {
        return this.links[ch.charCodeAt(0)];
    }

    public set(ch: string, node: TrieNode) {
        this.links[ch.charCodeAt(0)] = node;
    }

    public setEnd() {
        this.end = true;
    }

    public isEnd(): boolean {
        return this.end;
    }
}

export { TrieNode }