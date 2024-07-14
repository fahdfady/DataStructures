"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Stack_data_list, _Stack_top_index;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        _Stack_data_list.set(this, void 0);
        _Stack_top_index.set(this, void 0);
        __classPrivateFieldSet(this, _Stack_data_list, [], "f");
        __classPrivateFieldSet(this, _Stack_top_index, -1, "f");
    }
    Stack.prototype.push = function (data) {
        var _a;
        __classPrivateFieldGet(this, _Stack_data_list, "f").push(data);
        __classPrivateFieldSet(this, _Stack_top_index, (_a = __classPrivateFieldGet(this, _Stack_top_index, "f"), _a++, _a), "f");
    };
    Stack.prototype.pop = function () {
        var _a;
        if (this.isEmpty())
            return;
        if (__classPrivateFieldGet(this, _Stack_top_index, "f") == -1)
            return;
        var headData = __classPrivateFieldGet(this, _Stack_data_list, "f").splice(__classPrivateFieldGet(this, _Stack_top_index, "f"), 1)[0];
        __classPrivateFieldSet(this, _Stack_top_index, (_a = __classPrivateFieldGet(this, _Stack_top_index, "f"), _a--, _a), "f");
        return headData;
    };
    Stack.prototype.peek = function () {
        if (!__classPrivateFieldGet(this, _Stack_data_list, "f")[__classPrivateFieldGet(this, _Stack_top_index, "f")])
            return;
        return __classPrivateFieldGet(this, _Stack_data_list, "f")[__classPrivateFieldGet(this, _Stack_top_index, "f")];
    };
    Stack.prototype.isEmpty = function () {
        return __classPrivateFieldGet(this, _Stack_data_list, "f").length <= 0;
    };
    Stack.prototype.print = function () {
        var output = "";
        for (var i = __classPrivateFieldGet(this, _Stack_top_index, "f"); i >= 0; i--) {
            output += __classPrivateFieldGet(this, _Stack_data_list, "f")[i] + ", ";
        }
        console.log("[".concat(output, "]"));
    };
    Stack.prototype.size = function () {
        return __classPrivateFieldGet(this, _Stack_data_list, "f").length;
    };
    return Stack;
}());
exports.Stack = Stack;
_Stack_data_list = new WeakMap(), _Stack_top_index = new WeakMap();
