"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainedHashTable = void 0;
var ChainedHashTable = /** @class */ (function () {
    function ChainedHashTable() {
        this.d = 1;
        this.t = Array.apply(null, Array(Math.pow(2, this.d))).map(function () { return []; });
        this.z = this.randomOddInt();
        this.n = 0;
    }
    ChainedHashTable.prototype.randomOddInt = function () {
        var randOdd;
        do {
            randOdd = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        } while (randOdd % 2 === 0); // ensure it's odd
        return randOdd;
    };
    // Simple hash function using z (random odd int) and key
    ChainedHashTable.prototype.hash = function (key) {
        // Use key's string representation and calculate hash
        var hashValue = this.z * this.stringToNumber(String(key));
        return hashValue % this.t.length;
    };
    // Convert string to number (helper for the hash function)
    ChainedHashTable.prototype.stringToNumber = function (str) {
        var num = 0;
        for (var i = 0; i < str.length; i++) {
            num += str.charCodeAt(i);
        }
        return num;
    };
    ChainedHashTable.prototype.add = function (key, value) {
        if (this.find(key) !== null)
            return false;
        if (this.n + 1 > this.t.length)
            this.resize();
        var index = this.hash(key);
        this.t[index].push([key, value]);
        this.n++;
        return true;
    };
    ChainedHashTable.prototype.remove = function (key, value) {
        if (!key)
            return false;
        var index = this.hash(key);
        var bucket = this.t[index];
        for (var i = 0; i < bucket.length; i++) {
            var _a = bucket[i], bucketKey = _a[0], bucketValue = _a[1];
            if (bucketKey === key && bucketValue === value) {
                bucket.splice(i, 1); // Remove the key-value pair from the bucket
                this.n--; // Decrement the count of elements
                return true;
            }
        }
        return false;
    };
    ChainedHashTable.prototype.removeBucket = function (key) {
        if (!key)
            return false; // Check if the key is valid
        var removed = false;
        // Step 1: Compute the hash value to locate the correct bucket
        var index = this.hash(key);
        // Step 2: Find the key-value pair in the bucket
        var bucket = this.t[index]; // Access the bucket where the key might be stored
        for (var i = 0; i < bucket.length; i++) {
            var _a = bucket[i], bucketKey = _a[0], bucketValue = _a[1];
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
    };
    ChainedHashTable.prototype.resize = function () {
        this.d++;
        var newTable = Array.apply(null, Array(Math.pow(2, this.d))).map(function () { return []; });
        for (var _i = 0, _a = this.t; _i < _a.length; _i++) {
            var bucket = _a[_i];
            for (var _b = 0, bucket_1 = bucket; _b < bucket_1.length; _b++) {
                var _c = bucket_1[_b], key = _c[0], value = _c[1];
                var idx = this.hash(key); // recompute the hash value for the new table
                newTable[idx].push([key, value]); // insert element into the new table
            }
        }
        this.t = newTable;
    };
    // linear search
    ChainedHashTable.prototype.find = function (key) {
        var index = this.t[this.hash(key)];
        for (var y in index) {
            // let indexY = this.t[this.hash(y)];
            if (y === key) {
                return y;
            }
        }
        return null;
    };
    ChainedHashTable.prototype.print = function () {
        this.t.forEach(function (bucket, index) {
            var bucketStr = bucket.map(function (_a) {
                var key = _a[0], value = _a[1];
                return "[".concat(key, ", ").concat(value, "]");
            }).join(', ');
            console.log("Bucket ".concat(index, ": ").concat(bucketStr, " "));
        });
    };
    return ChainedHashTable;
}());
exports.ChainedHashTable = ChainedHashTable;
