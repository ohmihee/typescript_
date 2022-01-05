// 열거타입 enum
enum Weekdays {
    Monday = 1,
    Thuseday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

enum ProductActionTypes {
    Search = 'Products Search',
    Load = 'Products Load All',
    LoadFailure = 'Products Load All Failure',
    LoadSucces = 'Products Load All Success'
}

console.log(ProductActionTypes.Load)