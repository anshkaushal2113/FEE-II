console.log(10 + 2) //12

//converted into string (+)
console.log(10 + '2')  // 102

console.log(typeof(10+'2')) //string

//converted into number (-)
console.log(10 - '2'); // 8

console.log(typeof(10 - '2')) //number

console.log(10 + 'A') // 10A

console.log(10-'A') //NaN cant convert alphabets to numbers

console.log(10 + "2"-'A') // NaN 10 get converted to string before with 2; but when try to convert into string
// A it wont be able to do that. There, NaN will come as output.

console.log(10-"2" +"A"); //first 10 - 2 = 8 then concat with A it becomes 8A

//string to number

let a ="20"
let c = Number(a); //using Number constructors
let d = parseInt(a); //using parseInt
console.log(typeof d); //Number
console.log(typeof(a)) // Number



