//ES6 syntaxe

// CONST & LET
let _name = 'John';
let test;

_name = 'Jack';

const person = {
  name: 'John',
  age: 33
};

person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5);

//difference between var and let
var a = 5;


if(a == 5){
    var b = 6;
    let a = "voiture";
    console.log("a in if ="+a);
    console.log("b in if ="+b);
}
console.log("a ="+a);
console.log("b ="+b);




// ARROW FUNCTIONS

function sayHello() {
  console.log('Hello');
}

const sayHello_ = name => console.log(`Hello ${name}`);

const fruits = ['Apples', 'Oranges', 'Grapes'];

// FOREACH
fruits.forEach((fruit, index) => console.log(fruit));

// MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// FILTER
const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

const people2 = people.filter(person => person.id !== 2);




