// class Person {
//     firstName:string;
//     lastName:string;
//     age:number
// }

// const p = new Person();
// p.firstName='oh';
// p.lastName="mihee";
// p.age=27;

class Person {
    constructor(public firstName:string,
                public lastName:string,
                public age:number
                ){}
}

const p = new Person('oh','mihee',27) 
console.log(p)