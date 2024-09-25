"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainedHashTable = void 0;
var ChainedHashTable = /** @class */ (function () {
    function ChainedHashTable() {
        this.d = 1;
        this.t = Array.from({ length: Math.pow(2, this.d) }, function () { return []; });
        this.z = this.randomOddInt(); // Random odd integer
        this.n = 0;
    }
    // Generate a random odd integer
    ChainedHashTable.prototype.randomOddInt = function () {
        var randOdd;
        do {
            randOdd = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        } while (randOdd % 2 === 0);
        return randOdd;
    };
    // Hash function using the random odd integer and key
    ChainedHashTable.prototype.hash = function (key) {
        var keyAsString = this.stringToNumber(String(key)); // Convert key to a number
        var hashValue = Math.abs(this.z * keyAsString); // Ensure positive hash value
        return hashValue % this.t.length; // Apply modulo with the table size
    };
    // Convert string to number (simple sum of char codes)
    ChainedHashTable.prototype.stringToNumber = function (str) {
        var num = 0;
        for (var i = 0; i < str.length; i++) {
            num += str.charCodeAt(i);
        }
        return num;
    };
    // Add an element to the hash table
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
    // Find an element in the hash table
    ChainedHashTable.prototype.find = function (key) {
        var index = this.hash(key);
        var bucket = this.t[index];
        for (var _i = 0, bucket_1 = bucket; _i < bucket_1.length; _i++) {
            var _a = bucket_1[_i], bucketKey = _a[0], bucketValue = _a[1];
            if (bucketKey === key) {
                return bucketValue;
            }
        }
        return null;
    };
    // Remove an element from the hash table
    ChainedHashTable.prototype.remove = function (key, value) {
        var index = this.hash(key);
        var bucket = this.t[index];
        for (var i = 0; i < bucket.length; i++) {
            var _a = bucket[i], bucketKey = _a[0], bucketValue = _a[1];
            if (bucketKey === key && bucketValue === value) {
                bucket.splice(i, 1);
                this.n--;
                return true;
            }
        }
        return false;
    };
    // Resize the hash table when load factor exceeds threshold
    ChainedHashTable.prototype.resize = function () {
        this.d++;
        var newTable = Array.from({ length: Math.pow(2, this.d) }, function () { return []; });
        for (var _i = 0, _a = this.t; _i < _a.length; _i++) {
            var bucket = _a[_i];
            for (var _b = 0, bucket_2 = bucket; _b < bucket_2.length; _b++) {
                var _c = bucket_2[_b], key = _c[0], value = _c[1];
                var idx = this.hash(key); // Rehash keys for new table
                newTable[idx].push([key, value]);
            }
        }
        this.t = newTable;
    };
    // Print the current state of the hash table
    ChainedHashTable.prototype.print = function () {
        this.t.forEach(function (bucket, index) {
            var bucketStr = bucket.map(function (_a) {
                var key = _a[0], value = _a[1];
                return "[".concat(key, ", ").concat(value, "]");
            }).join(', ');
            console.log("Bucket ".concat(index, ": ").concat(bucketStr));
        });
    };
    return ChainedHashTable;
}());
exports.ChainedHashTable = ChainedHashTable;
"\n";
