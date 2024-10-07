// callback hell is a situation where we have multiple nested callbacks
// and each callback is dependent on the previous callback
//if any problem happens in the first callback then the whole code will be affected


//it is also known as pyramid of doom

console.log("maggie lene gya");
setTimeout(()=>{console.log("maggie lekr agya")},2000);
console.log("maggie banana start");
setTimeout(()=>{console.log("maggie ban gyi")},2000);
console.log("maggie khana start");
setTimeout(()=>{console.log("maggie kha li")},2000);
