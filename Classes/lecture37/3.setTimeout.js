//setTimeout() : This function executes after a specified delay.

//normal function
// function setTimeout(){

// }
// //anonymous function
// setInterval (function(){

// })

//arrow function
//har do second baad execute
//callback,delay
// setInterval(()=>{
//     console.log("Hello World")
//  },2000)


//callback,delay
//ek bar chelga after 2 sec
// setTimeout(()  => {
//     console.log("Hello World")
// },2000)


//setTimeOut() and setInterval is used web api not a pure javascript function
//this causes asynchronous cuz image searching ended is executed first than setTimeout()


//

//clearTimeout() : This function is used to stop the execution of the setTimeout() function.
// example:

// console.log("Image searching started..");
// var a = setTimeout(()=>{
//     console.log("Image fetched");
// })
// clearTimeout(a);
// console.log("Image searching ended..");


//clearInterval() : This function is used to stop the execution of the setInterval() function.

// console.log("Image searching started..");
// var a = setInterval(()=>{
//     console.log("Image fetched");
// })
// clearInterval(a);
// console.log("Image searching ended..");

// for(let i = 0;i<3;i++){
//     if(i == 0){
//         setInterval(()=>{
//             console.log(i);
//         },2000);
//     }
//     else if(i == 1){
//         setInterval(()=>{
//             console.log(i);
//         },2000);
//     }
//     else{
//         setInterval(()=>{
//             console.log(i);
//         },2000);
        
//     }
// }

var coutn = 0;
var a = setInterval(()=>{
    coutn++;
    console.log("count: " + coutn);
    if(coutn == 3){
        clearInterval(a);  
    console.log("prog ended");}
    },2000);
