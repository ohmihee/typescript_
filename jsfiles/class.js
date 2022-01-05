"use strict";
// class Person {
//     firstName:string;
//     lastName:string;
//     age:number
// }
// const p = new Person();
// p.firstName='oh';
// p.lastName="mihee";
// p.age=27;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
var p = new Person('oh', 'mihee', 27);
console.log(p);
