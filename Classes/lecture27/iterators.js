// for of: it is used in all iterable stuff like Array, string, maps except object
//  because it iterates over values
// [Symbol.iterator]() is used to check if its iterator or not
let str = "KAEMI";
// for(let i of str){
//     console.log(i);
//     // console.log(str[Symbol.iterator]) 
// }

let obj = {name:"Joginder",places:"mupltiple", placename :"Joginder"}
//objects are not iterable to iterate over them we have to use for in loops.
// for(let i of obj){
//     console.log(i);
//     // console.log(obj[Symbol.iterator])
// }

//for in : iterate over keys of an object
// for(let i in obj){
//     console.log(i);
//     console.log(obj[Symbol.iterator])
// }

let arr = [1,2,3,4]
for(let i in arr){
    console.log(arr[i]);
}
// for each 
arr.forEach((i) => console.log(i));