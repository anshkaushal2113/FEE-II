// Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
// In this article, we explain what a prototype is,
//  how prototype chains work, and how a prototype for an object can be set.

// it goes by refernce
 
const obj1 = {
    name: "Ansh",
    age: 21,
    desig: "Developer"
}
console.log(obj1);

const obj2 = Object.create(obj1); //obj2 is inheriting properties from obj1 prototyping

const obj3 = Object.create(obj2);

console.log(obj2); //it will be empty cuz obj2 doesnt have any property of its own

console.log(obj3.name);  // cuz its inheriting from obj2 which is inheriting from obj1

obj2.name = "Amit"; //it will change the name of obj2
console.log(obj2); //not it wont be empty
console.log(obj3.name); //it will print Amit

// __proto__ //it is a reference to the object's prototype also known as dunder proto

console.log(obj2.__proto__); //it will print obj1
console.log(obj1.__proto__ == Object.prototype); //it will print Object.prototype

console.log(Object.prototype.__proto__)   //it will print null

console.log(obj2.hasOwnProperty("name")); //it will print true

console.log(obj3.hasOwnProperty("name")); //it will print false



// so basically heirarchy is like this
// object.prototype -> obj1 -> obj2 -> obj3
// object prototype ki value is null (by default iski null hi hoti h)

// Number, arrays,strings,functions,objects
//  ye sab object hote h and inke prototype object.prototype hoti h


let num = 5
console.log(num.__proto__ == Number.prototype); //it will print true
// number constructor ki prototype object.prototype hoti h

let arr = [1,2,3,4,5]
console.log(arr.__proto__ == Array.prototype); //it will print true
// array constructor ki prototype object.prototype hoti h

// ALL Objects are defined in Window object global
// window()
// in node js its not window its global
// global() 

// constructors ->

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.drive = function() {
    console.log(this.make + " " + this.model + " is driving.");
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.drive();  // Output: Toyota Corolla is driving.
car2.drive();  // Output: Honda Civic is driving.
