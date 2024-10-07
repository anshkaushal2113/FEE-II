// let obj = {
//     name: "Ansh",
//     age: 21,
//     desig: "Developer"
// }
// obj.pika = "pikachu";

// console.log(obj);

function a(name,age,desig){
    this.name = name;
    this.age = age;
    this.desig = desig;
}
a.pika = "pikachu"; //nhi chlna chahiye
a.prototype.pika = "pikachu"; //chlna chahiye
const b = new a("Ansh",21,"Developer");
console.log(a);