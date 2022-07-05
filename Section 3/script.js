// var number = 5;
// console.log(number);

// var anotherNumber = number;
// console.log(anotherNumber);

// number = 12;
// console.log(number);
// console.log(anotherNumber);

// var array = [1,2,3];
// console.log(typeof array);

// var anotherArray = array;

// console.log(array);
// console.log(anotherArray);

// array.push(4);

// console.log(array);
// console.log(anotherArray);

// SCOPE

var test = 'Global scope';

function localScope() {
    var test = 'Local scope'
    console.log(test);
}

localScope();
console.log(test);

