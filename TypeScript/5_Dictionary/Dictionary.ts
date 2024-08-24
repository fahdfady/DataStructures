export class Dictionary<TKey extends string | number | symbol, TValue> {
    private entries: (KeyValuePair<TKey, TValue> | undefined)[];
    private initialSize: number;
    private entriesCount: number;

    constructor() {
        this.initialSize = 3;
        this.entries = new Array<KeyValuePair<TKey, TValue>>(this.initialSize);
        this.entriesCount = 0;
    }

    private resize(): void {
        if (this.entriesCount < this.entries.length - 1) {
            return;
        }

        const newSize = this.entries.length * 2;
        console.log(`[resize] from ${this.entries.length} to ${newSize}`);

        const newArray = new Array<KeyValuePair<TKey, TValue> | undefined>(newSize);

        for (let i = 0; i < this.entries.length; i++) {
            newArray[i] = this.entries[i];
        }
        this.entries = newArray;
    }

    size(): number {
        return this.entriesCount;
    }

    set(key: TKey, value: TValue): void {
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && this.entries[i]?.key === key) {
                this.entries[i]!.value = value;
                return;
            }
        }
        this.resize();
        const newPair = new KeyValuePair(key, value);
        this.entries[this.entriesCount] = newPair;
        this.entriesCount++;
    }

    get(key: TKey): TValue | undefined {
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && this.entries[i]?.key === key) {
                return this.entries[i]!.value;
            }
        }
        return undefined;
    }

    remove(key: TKey): boolean {
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && this.entries[i]?.key === key) {
                this.entries[i] = undefined;
                this.entriesCount--;
                return true;
            }
        }
        return false;
    }

    print(): void {
        console.log("----------");
        console.log(`[size] ${this.size()}`);
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] == null) {
                console.log(`[${i}]`);
            } else {
                console.log(`[${i}] ${String(this.entries[i]?.key)}: ${this.entries[i]?.value}`);
            }
        }
        console.log("==========");
    }
}

class KeyValuePair<TKey, TValue> {
    private _key: TKey;
    private _value: TValue;

    constructor(key: TKey, value: TValue) {
        this._key = key;
        this._value = value;
    }

    get key(): TKey {
        return this._key;
    }

    get value(): TValue {
        return this._value;
    }

    set value(value: TValue) {
        this._value = value;
    }
}
