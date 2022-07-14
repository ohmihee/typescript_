abstract class Person7 {
    // 추상 클래스를 선언
    constructor(public name:string){};
    changeAddres(newAddress:string){
        console.log(`Changing address to ${newAddress}`)
    }
    giveDayOff(){
        console.log(`Giving a day off to ${this.name}`)
    }

    promote(percent:number){
        this.giveDayOff();
        this.increasePay(percent);
    }
    abstract increasePay(percent:number):void;
    //추상메서드 선언
    //하위클래스에 선언된 메서드를 의미
}

class Employee4 extends Person7{
    increasePay(percent: number) {
        console.log(`increasing the salary of ${this.name} by ${percent}%`)
    }
}

class Contractor extends Person7{
    increasePay(percent: number) {
        console.log(`increasing the houly rate of ${this.name} by ${percent}%`)
    }
}

const workers:Person7[] = [];

workers[0] = new Employee4('john');
workers[1] = new Contractor('Mary');

workers.forEach(worker => worker.promote(5))
// 각 객체마다 promote() 메서드를 실행

// 자식클래스에서 생성자를 선언하지 않은 경우 부모의 생성자가 자동 호출되며, 
// 자식클래스와 부모클래스 모두에 생성자를 선언한 경우에는 super()로 부모클래스의 생성자를 호출해야함 