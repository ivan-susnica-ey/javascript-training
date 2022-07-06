// OBJECTS

// var person = {
//     name: 'Ivan',
//     age: 32,
//     details: {
//         hobbies:['cooking','anime'],
//         location: 'Serbia'
//     },
//     greet: function() {
//         console.log('Hello, I am ' + this.name)
//     }
// };

// var field = 'name';
// console.log(person.details.hobbies);

// person.greet();

// console.log(typeof person.name);

// person.name = 'Igor';

// console.log(person)

// OTHER WAYS OF CREATING OBJECTS

// var person = {
//     name:'Max',
//     age:27,
// }

// var anotherPerson = new Object();

// anotherPerson.name = 'Max';
// anotherPerson.age = 27;
// console.log(anotherPerson);

// console.log(anotherPerson==person)

// var anotherPerson = Object.create(person)
// anotherPerson.name = 'Anna';

// console.log(anotherPerson.age);

//PROTOTYPES

// Object.prototype.greet = function () {
//     console.log('Hello there I am ' + this.name)
// }

// console.log(person.__proto__);
// console.log(person.toString())

// person.greet();

// var max = Object.create(person);
// var anna = Object.create(person);
// anna.name = 'Anna';

// console.log(max.name)
// max.greet();
// console.log(anna.name)

// console.log(anna.__proto__.__proto__ == Object.prototype);

// CONSTRUCTOR FUNCTIONS

//  function Person() {
//     this.name = 'Max';
//     this.greet = function () {
//         console.log('Hello, I am ' + this.name)
//     }
//  }

//  console.log(this);

//  Person.prototype.greetGeneral = function () {
//     console.log('Hello');
//  };

//  Person.prototype.name = 'Anna';

//  var person = new Person();
//  person.name = 'Max';

// person.name = 'Anna';

//  person.greet();

//  console.log(person.__proto__ == Person.prototype)

// console.log(person.name)

// var anotherPerson= new Person();

// person.greet();
// anotherPerson.greetGeneral(); 

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var max = new Person('Max', 27);
// var anna = new Person('Anna', 28);


// console.log(max);
// console.log(anna)

