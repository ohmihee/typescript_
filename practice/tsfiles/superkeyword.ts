class Person6{
    constructor(public firstName:string,
                public lastName:string,
                private age:number
        ){}
    sellStock(symbol:string,numberOfShares:number){
        console.log(`SElling ${numberOfShares} of ${symbol}`)
    }
    // 부모의 sellStock()메서드
}

class Employee3 extends Person6{
    constructor(firstName:string,lastName:string,age:number,public department:string){
        super(firstName,lastName,age);
    }
    sellStock(symbol: string, shares:number) {
        super.sellStock(symbol, shares)
        // 부모의 sellStock을 호출
        this.reportToCompliance(symbol,shares);
    }
    private reportToCompliance(symbol:string, shares:number){
        console.log(`${this.lastName}`)
    }
}

const empl2 = new Employee3('Joe','Smith',29,'Accounting');
empl2.sellStock('IBM',100)