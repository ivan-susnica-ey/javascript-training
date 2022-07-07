// CLOSURES
//  function generator(input) {
//     var number = input;
//     return function() {
//         return number*2
//     }
//  }

//  var calc = generator(900);
//  console.log(calc);
//  console.log(calc())

//  console.log(generator(900)())

//IIFE

// (function calc() {
//     console.log('calc')
// })()

// (function calc(input) {
//     var number = input;
//     console.log(number)
// })(10)

// BUILT IN METHODS and PROPERTIES

//  function message(message) {
//     console.log(message);
//     console.log(arguments[1 ]);
//  }

//  message('hi','hello')

//  function message(book, house, dream) {
//     console.log(book);
//  }

//  console.log(message.name)
//  console.log(message.length)

// BUILT-in OBJECTS and FUNCTIONS

// setTimeout(()=>{
//     console.log('Finished')
// },2000);

// var interval = setInterval(()=>{
//     console.log('PING!')
// },2000)

// setTimeout(()=>{
//     clearInterval(interval)
// },10000)

//  // console.log(parseInt(a,16))

// console.log(typeof a.toString())
// console.log(typeof a)

// console.log(a.toFixed());

// var string = 'any text';
// console.log(string);

// var str = 'any text   ';
// console.log(str.charAt(2))

// console.log(str.concat('helou'))

// console.log(str.trim())

// var pi = Math.PI;

// console.log(pi);

// var abs = Math.abs(-1212);
// console.log(abs) 

// console.log(Math.max(1,20,99,2,4,5,20000))

// console.log(Math.floor(Math.random() * 100 + 1))

//  var today = new Date();
//  console.log(today);

// console.log(today.getDate())
// console.log(today.getMonth()+1)
// console.log(today.getFullYear())

// REG EXP

// var string = 'abc';
// var pattern = /ab/;

// console.log(pattern);

// console.log(pattern.exec(string))

// console.log(string.match(pattern))



