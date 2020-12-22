import { TrieNode } from "../common/TrieNode";

class Trie {
    private root: TrieNode

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const c = word.charAt(i);
            if(node.contains(c) == false)
            {
                node.set(c, new TrieNode());
            }
            node = node.get(c);
        }
        node.setEnd();
    }

    search(word: string): boolean {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const c = word.charAt(i);
            if(node.contains(c) == false)
            {
                return false;
            }
            node = node.get(c);
        }

        return node != null && node.isEnd();
    }

    startsWith(prefix: string): boolean {
        let node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const c = prefix.charAt(i);
            if(node.contains(c) == false)
            {
                return false;
            }
            node = node.get(c);
        }

        return node != null;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { Trie }