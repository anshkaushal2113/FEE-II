//setTimeOut() and setInterval() is web api not a pure javascript function 
// and is used for asynchronous programming
//this causes asynchronous cuz image searching ended is executed first than setTimeout()
console.log("Image searching started..");
setTimeout(()=>{
    console.log("Image fetched");
})

console.log("Image searching ended..");


// javascript code is sent to main stack
// amd setTimeout() is sent to web api
//web api gives an id to setTimeout()
//  and after 2 sec it is sent to callback queue
//an event loop checks if main stack is empty
// and then to main stack