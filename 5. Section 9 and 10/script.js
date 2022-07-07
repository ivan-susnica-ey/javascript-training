// WINDOW OBJECT
// console.log(outerHeight)
// console.log(innerHeight)

// console.log(window)

// localStorage.setItem('key1',1000);
// console.log(localStorage.getItem('key1'));

// same with session storage

// console.log(window.document)

// window.open('http://www.google.com')

//LOCATION OBJECT

// console.log(window.location.pathname)

//THE DOCUMENT OBJECT

// console.log(document.body.children[0])
// document.body.children[0].textContent='Something else';
// document.body.children[0].style.backgroundColor = 'red';

// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)

// console.log(document.getElementsByTagName('h1'))

//ClassName, Id etc.

// console.log(document.querySelector('h1'));

// var test = document.querySelectorAll('li');
// test.forEach((e)=>console.log(e.innerHTML))

// document.querySelectorAll('li')[1].textContent = 'I\'ve changed!'

var p = document.createElement('p');
p.innerHTML = 'A new paragraph yay! AND it\'s appended to the second list item!'

var listItem = document.querySelector('#special');

listItem.append(p)

// p.remove()

// alert('This is an alert');

// console.log(confirm('Are you sure?'))

// console.log(prompt('Your name?'))

//EVENTS

var btn = document.querySelector('button');

 window.onload = function() {
    console.log('Window loaded.')
 }

//  btn.onclick = function() {
//     console.log('Clicked')
//  }

function listener1() {
    console.log('Listener1')
}
function listener2() {
    console.log('Listener2')
}

btn.addEventListener('click', listener1)

btn.addEventListener('click', listener2)

setTimeout(()=>{
    btn.removeEventListener('click', listener1)
},2000)

var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');


inner.addEventListener('click',(event)=>{
    // event.stopPropagation();
    console.log('Clicked inner')
})

outer.addEventListener('click',(event)=>{
    // console.log(event.target)
    console.log('Clicked outer')
}, true)