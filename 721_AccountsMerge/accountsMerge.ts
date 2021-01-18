import { UnionFind } from "../common/DisjoinSet/UnionFind";

function accountsMerge(accounts: string[][]): string[][] {
    const emailToIndex = new Map();
    const emailToName = new Map();
    let emailsCount = 0;
    // 整理数据
    // 每个email对应一个index 保存到emailToIndex
    // 每个email对应一个name 保存到emailToName
    for (const account of accounts) {
        const name = account[0];
        const size = account.length;
        for (let i = 1; i < size; i++) {
            const email = account[i];
            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, emailsCount++);
                emailToName.set(email, name);
            }
        }
    }

    // 建立并查集
    // 相邻的email用union方法合并
    const uf = new UnionFind(emailsCount);
    for (const account of accounts) {
        const firstEmail = account[1];
        const firstIndex = emailToIndex.get(firstEmail);
        const size = account.length;
        for (let i = 2; i < size; i++) {
            const nextEmail = account[i];
            const nextIndex = emailToIndex.get(nextEmail);
            uf.union(firstIndex, nextIndex);
        }
    }

    // 在并查集内，查找所有索引相同的email 保存到indexToEmails中
    const indexToEmails = new Map();
    for (const email of emailToIndex.keys()) {
        const index = uf.find(emailToIndex.get(email));
        const account = indexToEmails.get(index) ? indexToEmails.get(index) : [];
        account.push(email);
        indexToEmails.set(index, account);
    }
    // 整理结果
    const merged = [];
    for (const emails of indexToEmails.values()) {
        emails.sort();
        const name = emailToName.get(emails[0]);
        const account = [];
        account.push(name);
        account.push(...emails);
        merged.push(account);
    }
    return merged;
};

export { accountsMerge }