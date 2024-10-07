// FUnction -> block of code 
// 1. Increases readability 
// 2. WE dont have to write the whole code again

// function sumof2(a,b){// decleration isme dalenge parameters
//     return a+b;
// }
// let a = 4;
// let b = 3;
// console.log(sumof2(a,b)); // calling ye h arguments

//default parameter
let devide = (a,b = 4) =>  a/b;
console.log(devide(4)) // NaN agr default parameters diya to chlega
console.log(devide(4,2))