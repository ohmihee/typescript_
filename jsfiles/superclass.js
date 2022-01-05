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
// 슈퍼클래스와 서브클래스가 같은 이름의 메소드를 가지고 있거나 둘다 모두 생성자를 가지고 있는 경우
// constructor(){}  ===> 생성자
// 슈퍼클래스와 서브클래스 모두에 생성자가 있는 경우 super() 메서드로 슈퍼클래스의 생성자 호출
var Person5 = /** @class */ (function () {
    function Person5(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person5;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(firstName, lastName, age, department) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.department = department;
        return _this;
        // 슈퍼클래스 생성자 호출
    }
    return Employee2;
}(Person5));
var empl = new Employee2('Joe', 'Smith', 29, 'Accounting');
// Enployee2의 생성자는 new 연산자를 사용할 때마다 자동으로 호출됨,
// 슈퍼클래스 Person5의 생성자를 super() 메서드를 호출하여 Person5에 전달.
// Employee2는 총 4개의 파라미터를 가짐
// department는 Employee2의 파라미터
// firstName,lastName,age는 Person5의 파라미터
console.log(empl);
/*
Employee2 {
    firstName: 'Joe',
    lastName: 'Smith',
    age: 29,
    department: 'Accounting'
  }
*/ 
