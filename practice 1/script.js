// console.log('Hello world!');
// console.log('Hello Plunker!');

// VARIABLES - BASICS

//  var variable = 'text';
//  console.log(variable)

//  var var1 = [1,2,3,'a'];
//  console.log(typeof var1);
//  console.log(var1[0]);
//  console.log(typeof NaN);
//  console.log(typeof null);
//  console.log(typeof undefined);

// OBJECTS
// var var1 = {
//     name:'Ivan'
// };
// console.log(var1.name);

//STRICT MODE

//DYNAMIC TYPING

// var var1 = 5;
// var Var1 = '10';

// console.log(typeof var1);
// console.log(typeof Var1);

// HOISTING

// var1 = 5;

// console.log(var1);

// var var1;

// FUNCTIONS

// function calc(number1, number2) {
//     return number1+number2;
// }

// calc();
// console.log(typeof calc);

// var anotherFn = calc(1,2);
// console.log(anotherFn);

//IF STATEMENTs

// var condition = 1;
// var anotherCondition = null;

// if (condition) {
//     console.log('executed')
// } else if (anotherCondition) {
//     console.log('still executed')
// } else {
//     console.log('not executed')
// }

//SWITCH

// var luckyNumber = 8;
// switch(luckyNumber) {
//     case 1:
//         console.log('is 1');
//         break;
//     case 8:
//         console.log('is 8');
//         break;
//     default:
//         console.log('default');
//         break;
// }

//FOR LOOP

// for (var i=0; i < 5; i++) {
//     console.log(i);
// }

// NESTED LOOPS

// for (var i=0; i < 5; i++) {
//     for (var j=0; j<2; j++){
//         console.log(i*j);
//     }
// }

// for (var i=0; i < 5; i++) {
//     for (var j=0; j<2; j++){
//         if (i==1) {
//             break;
//         }
//         console.log('inside inner loop'+j)
//     }
//     console.log(i);
// }

// FOR LOOP VARIATIONS (i--)

// LOOPING THROUGH ARRAY

// var array = [1,2,3];

// for (var i =0; i<array.length;i++){
//     console.log(array[i])
// }

//WHILE LOOP

// var number = 5;
// while (number<7) {
//     console.log(number);
//     number++; 
// }

//  var condtion = false;

//  do {
//     console.log('Executed')
//  } while (condtion);

 // ADDITION

//  var a = 12;
//  var b = undefined;

//  console.log(a+b);

 // SUBTRACTION

//  var a = 'Split us';
//  var b = 'us'; 

//  console.log(a-b)

 // MULTIPLICATION

//  var a = 1.3;
//  var b = Infinity; 

//  console.log(a*b)

 // DIVISION and MODULUS

//  var a = 3.3;
//  var b = 2.2; 

//  console.log((a/b).toFixed(2))

 var c = 10;
 var d = 3;

 console.log(c%d)