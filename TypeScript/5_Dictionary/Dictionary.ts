class Dictionary<Tkey, Tvalue> {
    private entries: KeyValuePair<Tkey, Tvalue>[];

    private iniitialSize: number;

    constructor() {
        this.entries = [];
    }

    static KeyValuePair = class KeyValuePair<Tkey, Tvalue> {
        private readonly key: Tkey;
        private value: Tvalue;

        constructor(key: Tkey, value: Tvalue) {
            this.key = key;
            this.value = value;
        }
    }
}