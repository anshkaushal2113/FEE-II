// var a = 10;
// function sum(a,b){
//     return a+b;
//     function c(){
//         let d  =10;
//         console.log(d);
//     }
//     c();
// }

// sum(5,4);
// apple(); //ye call kaise ho rha h
// function apple(){
//     let a = 20;
//     console.log(a);
// }

console.log(a); //undefined
var a = 10;
b();
function b(){
    console.log(c);
    var c = 20;
    console.log(c);
}

// a: undefined , b: function
// a:10 , b:c:undefined

// point to be noted ye undefined tabhi arha h kyunki var use hua h aur var hoisting hota h
// let use kroge to error ayega kyunki let hoisting nhi hota same case with const
// let const temp deadzone m chle jate h
// let and const k upr wala part deadzone bn jata h


// GLOBAL EXECUTION CONTEXT

// Call Stack ->

// 1. Memory creation Phase
// 2. Code Execution Phase