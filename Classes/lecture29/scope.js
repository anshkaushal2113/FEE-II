// scope:

//1.global: 

//2.block:

//3.function scope:

//4.lexical :


//1.global scope: by default all variables are global scoped

// let a = "global scope"
// const b = "global scope"
// var c = "global scope"

// function scopeGlobal(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// scopeGlobal();
// console.log(a);
// console.log(b);
// console.log(c);

//2. functional scope: variables accessable and visible inside a function but not outside the function

// let c = 50; //global variable
// // let sum = 50;
// function calsum(a,b){
//     let c = a+b; //functional scope
//     console.log(c);
// }

// calsum(4,3);
// console.log(c) // cannot access this variable //global variable are not affected by functional scope


//3.Block scoped: 
{
    // let a = 10; // this cannot be accessed outside the block
    // const b = 30; // this cannot be accesssed outsde the block
    // var c = 40; // this can be accessed outside the block 
}


// console.log(a);
// console.log(b);
// console.log(c);

//4. Lexical:  



function a(){
    let b =20;
    // console.log(c) // not accessible out of scope
    function b(){
        let c = b+23;
        console.log(c);
    }
    // console.log(c) // not accessible out of the scope
}

a();