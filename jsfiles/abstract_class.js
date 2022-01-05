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
var Person7 = /** @class */ (function () {
    // 추상 클래스를 선언
    function Person7(name) {
        this.name = name;
    }
    ;
    Person7.prototype.changeAddres = function (newAddress) {
        console.log("Changing address to ".concat(newAddress));
    };
    Person7.prototype.giveDayOff = function () {
        console.log("Giving a day off to ".concat(this.name));
    };
    Person7.prototype.promote = function (percent) {
        this.giveDayOff();
        this.increasePay(percent);
    };
    return Person7;
}());
var Employee4 = /** @class */ (function (_super) {
    __extends(Employee4, _super);
    function Employee4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee4.prototype.increasePay = function (percent) {
        console.log("increasing the salary of ".concat(this.name, " by ").concat(percent, "%"));
    };
    return Employee4;
}(Person7));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contractor.prototype.increasePay = function (percent) {
        console.log("increasing the houly rate of ".concat(this.name, " by ").concat(percent, "%"));
    };
    return Contractor;
}(Person7));
var workers = [];
workers[0] = new Employee4('john');
workers[1] = new Contractor('Mary');
workers.forEach(function (worker) { return worker.promote(5); });
// 각 객체마다 promote() 메서드를 실행
// 자식클래스에서 생성자를 선언하지 않은 경우 부모의 생성자가 자동 호출되며, 
// 자식클래스와 부모클래스 모두에 생성자를 선언한 경우에는 super()로 부모클래스의 생성자를 호출해야함 
