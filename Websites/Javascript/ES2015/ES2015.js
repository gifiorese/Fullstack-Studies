//PROGRAMA 1
const days = ["Moday"]; //Array
const person = {first_name: "Imagen"}; //Object's literal

//Trying to modify
days.push("Tuesday")
person.last_name = "Heap"


//PROGRAMA 2
let score = 0;
let age = 23;
let hungry = false;

//Modifying the variables
score = 50;
age = 24;
hungry = true;


//PROGRAMA 3
const person = {
    first_name: "Gio",
    role: "Student"
}

function personDescription(person) {
    const description = person.first_name;
    if(person.role) {
        description = description + " is a ";
        description = description + person.role;
    }
    console.log(description);
}

personDescription(person);


//PROGRAMA 4
//Single line
const singleQuotes = 'This is a string';
const doubleQuotes = "This is also a string";

const result = singleQuotes + ' ' + doubleQuotes;

document.querySelector('html').innerHTML=result;

const templateLit = `<h1>This is a template literal!!</h1>`;
document.querySelector('html').innerHTML=templateLit;

//Multiple lines
const fruitList =
    "<ul>" +
        "<li>Kiwi</li>" +
        "<li>Banana</li>" +
        "<li>Melon</li>" +
        "<li>Apple</li>" +
    "</ul>";

document.querySelector('html').innerHTML=fruitList;

//Multiple lines - Cleaning up with Template Literals
const fruitList =
    `<ul>"
        <li>Kiwi</li>
        <li>Banana</li>
        <li>Melon</li>
        <li>Apple</li>
    </ul>`;

document.querySelector('html').innerHTML=fruitList;


//PROGRAMA 5
let name = 'Gio';
console.log(`Hello ${name}!!!`);


//PROGRAMA 6
function like(thing){
    return `I like ${thing}`;
}

function love(thing){
    return `I love ${thing}`;
}

const sentence = `<h1>${like('oranges')}, but ${love('apples')}</h1>`;

document.querySelector('html').innerHTML=sentence;


//PROGRAMA 7
//No arguments
const name = "Gio";

const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => console.log("Bye" + name);

//Single argument
const square = x => x * x;

const cube = (x) => {
    return square(x) * x;
}

//Multiple arguments
const multiply = (x, y) => x * y;

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}