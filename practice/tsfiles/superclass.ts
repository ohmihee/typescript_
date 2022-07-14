// 슈퍼클래스와 서브클래스가 같은 이름의 메소드를 가지고 있거나 둘다 모두 생성자를 가지고 있는 경우
// constructor(){}  ===> 생성자
// 슈퍼클래스와 서브클래스 모두에 생성자가 있는 경우 super() 메서드로 슈퍼클래스의 생성자 호출
class Person5 {
    constructor(public firstName:string,
                public lastName:string,
                private age:number
                ){}
}

class Employee2 extends Person5{
    constructor(firstName:string,lastName:string,age:number,public department:string){
        super(firstName,lastName,age);
        // 슈퍼클래스 생성자 호출
    }
}

const empl = new Employee2('Joe','Smith',29,'Accounting')
// Enployee2의 생성자는 new 연산자를 사용할 때마다 자동으로 호출됨,
// 슈퍼클래스 Person5의 생성자를 super() 메서드를 호출하여 Person5에 전달.

// Employee2는 총 4개의 파라미터를 가짐
// department는 Employee2의 파라미터
// firstName,lastName,age는 Person5의 파라미터

console.log(empl)
/*
Employee2 {
    firstName: 'Joe',
    lastName: 'Smith',
    age: 29,
    department: 'Accounting'
  }
*/