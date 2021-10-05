"use strict";
exports.__esModule = true;
var Abc = /** @class */ (function () {
    function Abc() {
    }
    Abc.prototype.fun = function () {
        var _a;
        var first, second;
        _a = ['sohil', 'parmar'], first = _a[0], second = _a[1];
        console.warn(first);
        console.warn(second);
    };
    return Abc;
}());
var a = new Abc();
a.fun();
