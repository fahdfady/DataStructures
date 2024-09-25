export class HashTable<K, V> {
    private table: Array<[K, V] | undefined>; // an array to store the key-value pairs
    private size: number; // the size of the table

    constructor(size: number) {
        this.size = size;
        this.table = new Array(this.size);
    }

    /**
     * A simple hash function for demonstration purposes.
     * This function takes in a key of type K and returns a hash value
     * between 0 and size - 1.
     * @param key The key to be hashed.
     */
    private hash(key: K): number {
        let hashValue = 0;
        const keyStr = String(key);

        for (let i = 0; i < keyStr.length; i++) {
            hashValue += keyStr.charCodeAt(i);
        }

        return hashValue % this.size;
    }

    // update a key-value pair in the hash table
    public set(key: K, value: V): void {
        const index = this.hash(key);

        this.table[index] = [key, value];
    }

    // retrieve the value associated with a given key
    public get(key: K): V | undefined {
        const index = this.hash(key);
        const pair = this.table[index];

        if (pair && pair[0] === key) {
            return pair[1]
        };
        return undefined;
    }

    // Remove the key-value pair
    public remove(key: K): void {
        const index = this.hash(key);
        const pair = this.table[index];

        if (pair && pair[0] === key)
            this.table[index] = undefined;
    }

    public print(): string {
        let output = "";
        for (const pair of this.table) {
            if (pair) {
                output += `[${pair[0]}]: ${pair[1]}\n`;
            }
        }
        console.log(output); // Log the output directly
        return output
    }
}
