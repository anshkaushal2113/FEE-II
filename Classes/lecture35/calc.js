var a = document.createElement('input');
a.setAttribute('type','text');
a.setAttribute('placeholder','Enter first number');
document.body.appendChild(a);
var b = document.createElement('input');
b.setAttribute('type','text');
b.setAttribute('placeholder','Enter second number');
document.body.appendChild(b);

var c = document.createElement('button');
c.innerText = 'Add';

document.body.appendChild(c);
var d = document.createElement('button');
d.innerText = 'Subtract';
document.body.appendChild(d);
var e = document.createElement('button');
e.innerText = 'Multiply';
document.body.appendChild(e);
var f = document.createElement('button');
f.innerText = 'Divide';
document.body.appendChild(f);
var g = document.createElement('button');
g.innerText = 'Clear';
document.body.appendChild(g);

c.onclick = function(){
    var result = parseInt(a.value) + parseInt(b.value);
    alert('The sum is: '+result);
}

d.onclick = function(){
    var result = parseInt(a.value) - parseInt(b.value);
    alert('The difference is: '+result);
}

e.onclick = function(){
    var result = parseInt(a.value) * parseInt(b.value);
    alert('The product is: '+result);
}

f.onclick = function(){
    var result = parseInt(a.value) / parseInt(b.value);
    alert('The division is: '+result);
}

g.onclick = function(){
    a.value = '';
    b.value = '';
}