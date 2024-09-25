"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.size = size;
        this.table = new Array(this.size);
    }
    /**
     * A simple hash function for demonstration purposes.
     * This function takes in a key of type K and returns a hash value
     * between 0 and size - 1.
     * @param key The key to be hashed.
     */
    HashTable.prototype.hash = function (key) {
        var hashValue = 0;
        var keyStr = String(key);
        for (var i = 0; i < keyStr.length; i++) {
            hashValue += keyStr.charCodeAt(i);
        }
        return hashValue % this.size;
    };
    // update a key-value pair in the hash table
    HashTable.prototype.set = function (key, value) {
        var index = this.hash(key);
        this.table[index] = [key, value];
    };
    // retrieve the value associated with a given key
    HashTable.prototype.get = function (key) {
        var index = this.hash(key);
        var pair = this.table[index];
        if (pair && pair[0] === key) {
            return pair[1];
        }
        ;
        return undefined;
    };
    // Remove the key-value pair
    HashTable.prototype.remove = function (key) {
        var index = this.hash(key);
        var pair = this.table[index];
        if (pair && pair[0] === key)
            this.table[index] = undefined;
    };
    HashTable.prototype.print = function () {
        var output = "";
        for (var _i = 0, _a = this.table; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair) {
                output += "[".concat(pair[0], "]: ").concat(pair[1], "\n");
            }
        }
        console.log(output); // Log the output directly
        return output;
    };
    return HashTable;
}());
exports.HashTable = HashTable;
