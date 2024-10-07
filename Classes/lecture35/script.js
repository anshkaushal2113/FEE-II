// Adding Elements
var newh1 = document.createElement('h1');
console.log(newh1);
newh1.innerText = 'Dom element: ';
// newh1.textContent = 'Dom element: ';


//2. To add this element to the body of the document
var body = document.querySelector('body');
body.appendChild(newh1);
newh1.append("learning in JS")

//3. append() adds element at the end
body.append('Hello World'); 

// appendChild() adds single element
// append() only adds multiple elements

//4. prepend() adds element at the beginning
body.prepend(newh1);



//5. remove() removes the element

body.removeChild(newh1) //removes the newh1
// body.remove()  //removes the body


//to do list  append data from data coming from api 