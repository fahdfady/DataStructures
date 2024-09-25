export class ChainedHashTable<K, V> {
    private d: number // keeps track of the size of the table (will be a d^2)
    private t: Array<Array<[K, V]>> // array of arrays (List of chaines (the chains ar in key-value pairs))
    private z: number // a random odd integer number for hashing purposes
    private n: number // number of elements in the hash table

    constructor() {
        this.d = 1;
        this.t = Array.apply(null, Array(2 ** this.d)).map(() => []);
        this.z = this.randomOddInt();
        this.n = 0;
    }

    public randomOddInt(): number {
        let randOdd: number;
        do {
            randOdd = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        } while (randOdd % 2 === 0); // ensure it's odd
        return randOdd;
    }

    // Simple hash function using z (random odd int) and key
    private hash(key: K): number {
        // Use key's string representation and calculate hash
        const hashValue = this.z * this.stringToNumber(String(key));
        return hashValue % this.t.length;
    }

    // Convert string to number (helper for the hash function)
    private stringToNumber(str: string): number {
        let num = 0;
        for (let i = 0; i < str.length; i++) {
            num += str.charCodeAt(i);
        }
        return num;
    }

    public add(key: K, value: V): boolean {
        if (this.find(key) !== null) return false;
        if (this.n + 1 > this.t.length) this.resize();

        const index = this.hash(key);

        this.t[index].push([key, value]);
        this.n++
        return true
    }

    public remove(key: K, value: V): boolean {
        if (!key) return false;

        const index = this.hash(key);

        const bucket = this.t[index];

        for (let i = 0; i < bucket.length; i++) {
            const [bucketKey, bucketValue] = bucket[i];
            if (bucketKey === key && bucketValue === value) {
                bucket.splice(i, 1); // Remove the key-value pair from the bucket
                this.n--; // Decrement the count of elements
                return true;
            }
        }

        return false;
    }

    public removeBucket(key: K): boolean {
        if (!key) return false; // Check if the key is valid
        let removed = false;

        // Step 1: Compute the hash value to locate the correct bucket
        const index = this.hash(key);

        // Step 2: Find the key-value pair in the bucket
        const bucket = this.t[index]; // Access the bucket where the key might be stored
        for (let i = 0; i < bucket.length; i++) {
            const [bucketKey, bucketValue] = bucket[i];

            // Step 3: Check if the key matches
            if (bucketKey === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                this.n--; // Decrement the count of elements
                removed = true;
                i--; // Decrease index since we removed an element, so the next element shifts
            }
        }

        // If we reach here, the key was not found
        return false;
    }

    public resize(): void {
        this.d++;
        const newTable = Array.apply(null, Array(2 ** this.d)).map(() => []);

        for (let bucket of this.t) {
            for (let [key, value] of bucket) {
                const idx = this.hash(key); // recompute the hash value for the new table
                newTable[idx].push([key, value]); // insert element into the new table
            }
        }

        this.t = newTable;
    }

    // linear search
    public find(key: K): string | null {
        let index = this.t[this.hash(key)];
        for (let y in index) {
            // let indexY = this.t[this.hash(y)];
            if (y === key) {
                return y
            }
        }
        return null
    }

    public print(): void {
        this.t.forEach((bucket, index) => {
            const bucketStr = bucket.map(([key, value]) => `[${key}, ${value}]`).join(', ');
            console.log(`Bucket ${index}: ${bucketStr} `)
        })
    }
}