function getFindPrice(price:number, discount:number){
    return price-price/discount
}

console.log(getFindPrice(100,10)) 
//console.log(getFindPrice(100,"10%")) // 타입이 맞이 않아서 오류

function voidTest(name:void){
    console.log(name)
}

voidTest();