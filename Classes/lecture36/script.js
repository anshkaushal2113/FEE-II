function add(){
var a = document.querySelector('#namedalo').value;
// var ac = a.getAttribute('value');
var b = document.querySelector('#biodalo').value;
var c = document.querySelector('#imgdalo').value;



    var name = document.querySelector('.name');
    name.textContent = a;

    var bio = document.querySelector('.bio');
    bio.innerText = b;
    var img = document.querySelector('img');
    img.setAttribute('src',c);

}