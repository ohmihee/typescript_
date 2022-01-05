"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person6 = /** @class */ (function () {
    function Person6(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person6.prototype.sellStock = function (symbol, numberOfShares) {
        console.log("SElling ".concat(numberOfShares, " of ").concat(symbol));
    };
    return Person6;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(firstName, lastName, age, department) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.department = department;
        return _this;
    }
    Employee3.prototype.sellStock = function (symbol, shares) {
        _super.prototype.sellStock.call(this, symbol, shares);
        // 부모의 sellStock을 호출
        this.reportToCompliance(symbol, shares);
    };
    Employee3.prototype.reportToCompliance = function (symbol, shares) {
        console.log("".concat(this.lastName));
    };
    return Employee3;
}(Person6));
var empl2 = new Employee3('Joe', 'Smith', 29, 'Accounting');
empl2.sellStock('IBM', 100);
