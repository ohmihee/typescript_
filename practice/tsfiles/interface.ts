interface Person4 {
    firstName:string;
    lastName:string;
    age:number
}

function savePerson(person:Person4):void{
    console.log(person)
}

const pp:Person4 = {
    firstName:'oh',
    lastName:'mihee',
    age:27
}

savePerson(pp)