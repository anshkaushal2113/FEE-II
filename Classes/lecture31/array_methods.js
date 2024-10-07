//array methods: map,filter, resduce, sort, find, forEach, some, every
// 1. Map:  It returns a new array
    // syntax : let newArray = arr.map(callback(currentValue[, index[, array]]) {
    //element , index, array -> map k pass 3 parameters hote h
// let a = ["ansh","vansh","kansh"];

// let b = a.map(function(name){return name.toUpperCase();});
// let c = a.map(name => name.toUpperCase());
// console.log(b); 

// 2. filter : It returns a new array
//element , index, array -> filter k pass 3 parameters hote h
let a = [1,2,3,4,5,6,7,8,9,10];
let b = a.filter(i => i%2 == 0);
console.log(b);



//3. reduce
// 
// accumulator, currentValue, currentIndex, array -> reduce k pass 4 parameters hote h