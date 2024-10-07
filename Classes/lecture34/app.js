//selectors:

//1.getElementsById()
var a = document.getElementById("heading");
a.style.color = "aqua";
a.style.backgroundColor = "black";
a.style.padding = "20px";
a.style.border = "4px solid aqua";

//2. getElementByClass()
// idhr class name hota h to avoid conflicts between our css file nd js file styling
var b = document.getElementsByClassName("list");
console.log(b[0]);
console.log(b[1]);
// for(let i = 0;i<b.length;i++){
//     b[i].style.fontWeight = "bold";
//     b[i].style.color = "purple";
// }

for(let i of b){
    i.style.fontWeight = "bold";
    i.style.color = "blue";
    
}

//3. getElementByName()


//4. getElementByTagName()

var c = document.getElementsByTagName("h2");
c[0].style.color = "black";
c[0].style.textDecoration = "line-through aqua";

//5. querySelector()
//it selects the first element
//querySelectAll() selects all elements
var d = document.querySelector("ul li a");
var e = document.querySelector("li:nth-of-type(3)"); //this is used to select 3rd element of li
var f = document.querySelector("h2 + ul li:nth-of-type(3)");
e.style.color = "purple";
f.style.color = "green";

//1. innerText: it returns the text of the element
// aware of css styling: dont give block content
const para = document.querySelector("p");
para.innerText;

//2.textContent: it returns the text of the element
//not aware of css styling: hidden content will also be visible
para.textContent;

//3/ innerHTML: it returns the text of the element and also the html tags
para.innerHTML;


// getAttribute() and setAttribute()

const input = document.querySelector("input");
input.value; // tells the value given in the input field
input.getAttribute("type"); // tells type of the input field

const image = document.querySelector("img");
image.style.height = "800px";
image.style.width = "1400px";
image.setAttribute("src","https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg");
