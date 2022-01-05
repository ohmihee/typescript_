class Person {
    public firstName = '';
    public lastName = '';
    private age = 0;

    protected sayHello():string {
        return `My name is ${this.firstName}${this.lastName}`
    }
}

class Employee extends Person {
    department = 1;

    reviewPerformance():void{
        this.sayHello();
        this.increasePay(5);
    }

    increasePay(percent:number):void {
        
    }
}