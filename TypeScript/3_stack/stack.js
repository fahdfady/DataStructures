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
var _Stack_data_list;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var linkedlist_1 = require("./linkedlist");
var Stack = /** @class */ (function () {
    function Stack() {
        // Ecmascript or something
        // @ts-ignore
        _Stack_data_list.set(this, void 0);
        __classPrivateFieldSet(this, _Stack_data_list, new linkedlist_1.LinkedList(), "f");
    }
    Stack.prototype.push = function (data) {
        __classPrivateFieldGet(this, _Stack_data_list, "f").insertFirst(data);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            return;
        if (!__classPrivateFieldGet(this, _Stack_data_list, "f").head)
            return;
        var headData = __classPrivateFieldGet(this, _Stack_data_list, "f").head.data;
        __classPrivateFieldGet(this, _Stack_data_list, "f").deleteHead();
        return headData;
    };
    Stack.prototype.peek = function () {
        if (!__classPrivateFieldGet(this, _Stack_data_list, "f").head)
            return;
        return __classPrivateFieldGet(this, _Stack_data_list, "f").head.data;
    };
    Stack.prototype.isEmpty = function () {
        return __classPrivateFieldGet(this, _Stack_data_list, "f").length <= 0;
    };
    Stack.prototype.print = function () {
        __classPrivateFieldGet(this, _Stack_data_list, "f").printList();
    };
    Stack.prototype.size = function () {
        return __classPrivateFieldGet(this, _Stack_data_list, "f").length;
    };
    return Stack;
}());
exports.Stack = Stack;
_Stack_data_list = new WeakMap();
