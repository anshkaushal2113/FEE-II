// object two types se likha jata h 
//object heap memory me store hota h
// 1. Constructor
// 2. Literals ( uses curly bracs {} Key ,value pair)

// 1. Constructor
// let obj = new Object(); // can use new or not
// obj.name = "Ansh";
// console.log(obj);  // completely prints whole object


//2. Literals
// var user = {name: "Ansh","full name":"Ansh Kaushal", age: 20 , class : "FEE"};  // key = name, age, class and value = Ansh, 20, FEE
// console.log(user);


// //updating object:
// user.age = 19;

// //accessing object:

// // console.log(user.age);  // dot notation
// console.log(user["age"]);  // preferable faster agr multiple words h toh bracket notation use karna chahiye
// console.log(user["full name"]);  // agar multiple words h toh bracket notation use karna chahiye


//object in object

// const users = {
//     user1 :{
//         name :"Ansh",
//         age:19,

//     },
//     user2 : {
//         name: "Kaemi",
//         age : 19 
//     },
//     user3 :{
//         name : "Kaushal",
//         age :  20
//     }
// }

// console.log(users.user2);
// console.log(users["user2"]);
// console.log(users.user2.name); // dot notation for nested values
// console.log(users["user2"]["name"]);  // multiple words h toh bracket notation use karna chahiye

// //update
// users.user3.name = "Ansh Kaushal";
// console.log(users.user3.name);

//object merge //qhile merging two objects, the last object will overwrite the first object 
// therefore., the keys of both object should be different

// const user1 = {name: "Ansh", age: 19};
// const user2 = {name1: "Kaemi", age1: 20};
// // const user = {...user1, ...user2};  // spread operator copy krta h
// //spread operator other names = rest operator, three dots, expansion operator

// const user = Object.assign(user1, user2);  // merge two objects
// console.log(user);

const a = [obj = {obj1 :{name: "Ansh", age: 19,rollno:7} ,
     obj2: {name: "Kaemi", age: 20, rollno: 10},
      obj3 :{name: "Kaushal", age: 21, rollno:3}}];

a[0].obj2.age = 19;
console.log(a);

//dsa questions on array and objects