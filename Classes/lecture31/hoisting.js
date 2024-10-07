function printname(names,num){ // 1. call back function 2. number of times we want to call the function
    for(let i = 0; i < num; i++){
        names();
    }
}

let myName = function (){
    console.log("Shivam");
}
printname(myName,20);

//hoisting is ba