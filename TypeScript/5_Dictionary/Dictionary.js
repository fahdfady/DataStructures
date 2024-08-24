"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.initialSize = 3;
        this.entries = new Array(this.initialSize);
        this.entriesCount = 0;
    }
    Dictionary.prototype.resize = function () {
        if (this.entriesCount < this.entries.length - 1) {
            return;
        }
        var newSize = this.entries.length * 2;
        console.log("[resize] from ".concat(this.entries.length, " to ").concat(newSize));
        var newArray = new Array(newSize);
        for (var i = 0; i < this.entries.length; i++) {
            newArray[i] = this.entries[i];
        }
        this.entries = newArray;
    };
    Dictionary.prototype.size = function () {
        return this.entriesCount;
    };
    Dictionary.prototype.set = function (key, value) {
        var _a;
        for (var i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && ((_a = this.entries[i]) === null || _a === void 0 ? void 0 : _a.key) === key) {
                this.entries[i].value = value;
                return;
            }
        }
        this.resize();
        var newPair = new KeyValuePair(key, value);
        this.entries[this.entriesCount] = newPair;
        this.entriesCount++;
    };
    Dictionary.prototype.get = function (key) {
        var _a;
        for (var i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && ((_a = this.entries[i]) === null || _a === void 0 ? void 0 : _a.key) === key) {
                return this.entries[i].value;
            }
        }
        return undefined;
    };
    Dictionary.prototype.remove = function (key) {
        var _a;
        for (var i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && ((_a = this.entries[i]) === null || _a === void 0 ? void 0 : _a.key) === key) {
                this.entries[i] = undefined;
                this.entriesCount--;
                return true;
            }
        }
        return false;
    };
    Dictionary.prototype.print = function () {
        var _a, _b;
        console.log("----------");
        console.log("[size] ".concat(this.size()));
        for (var i = 0; i < this.entries.length; i++) {
            if (this.entries[i] == null) {
                console.log("[".concat(i, "]"));
            }
            else {
                console.log("[".concat(i, "] ").concat(String((_a = this.entries[i]) === null || _a === void 0 ? void 0 : _a.key), ": ").concat((_b = this.entries[i]) === null || _b === void 0 ? void 0 : _b.value));
            }
        }
        console.log("==========");
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this._key = key;
        this._value = value;
    }
    Object.defineProperty(KeyValuePair.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValuePair.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return KeyValuePair;
}());
