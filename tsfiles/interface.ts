interface Persion {
    firstName:string;
    lastName:string;
    age:number
}

function savePerson(person:Person):void{
    console.log(person)
}

const pp:Person = {
    firstName:'oh',
    lastName:'mihee',
    age:27
}

savePerson(pp)