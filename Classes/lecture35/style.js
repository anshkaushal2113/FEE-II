var img = document.querySelector('img');
console.log(img.classList);
var heading = document.querySelector('h1');
console.log(heading.classList);

//1. Adding class : classList.Add()

heading.classList.add('abc')
heading.classList.add('pink')

//2. Removing class : classList.remove()
heading.classList.remove('pink')

//3.checking if class exists : classList.contains()
// heading.classList.contains('abc')
console.log(heading.classList.contains('abc'))

//4. Toggling class : classList.toggle()
heading.classList.toggle('abc')// present h to remove krdega
heading.classList.toggle('black') // present nhi h to add krdega