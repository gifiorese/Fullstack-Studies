/* 
    This file stores many JS code snippets from
    the "JavaScript Basics" TreeHouse course.
    Do not attempt to run this as a single file.
    Each code snippet must be run separatly.
*/

// PROGRAMA 1  
var name = prompt('What is your name?');
alert(`Hi, ${name}. Want to see something cool?`);
document.querySelector('html').innerHTML = `
    <h1>Welcome to ${name}'s website!</h1>
    <iframe 
        src="https://giphy.com/embed/EZICHGrSD5QEFCxMiC" 
        width="480" 
        height="480" 
        frameBorder="0" 
        class="giphy-embed" 
        allowFullScreen>
    </iframe>
    <p>
        <a href="https://giphy.com/gifs/HBOMax-tom-and-jerry-hbomax-n-EZICHGrSD5QEFCxMiC">
        via GIPHY</a>
    </p>`;


// PROGRAMA 2 
alert("Hello World!");
console.log("Hello World!");

// PROGRAMA 3 
alert("Hello, thanks for visiting!");
console.log("Hello from the console");
document.write("<h1> Welcome to my web page </h1>");


// PROGRAMA 4
alert("Hey! You're back for more?");


// PROGRAMA 5 - ERROS PROPOSITAIS
/* Errado */
alert(Hello World!");
console.log("Hello from the console!";
Alert("Thanks for visiting!");
document.rite("<h1>Welcome to my web page!</h1>");
/* Corrigido */
alert("Hello World!");
console.log("Hello from the console!");
alert("Thanks for visiting!");
document.write("<h1>Welcome to my web page!</h1>"); 


// PRACTICE CHALLENGE - SELF-DESTRUCT MESSAGE
alert("This message will self-destruct in");
alert("3...");
alert("2...");
alert("1...");
document.write("<h1>🔥🔥BOOM!🔥🔥</h1>");
console.log("Message destroyed!");


// PROGRAMA 6
var message = "Hello!";
console.log(message);
message = "Hola!";
console.log(message);


// PROGRAMA 7
var score = 0;
score += 10;
console.log(score);

var bonusPts = 100;
var finalScore = score + bonusPts;
console.log(finalScore);


// PROGRAMA 8
const score = 5;
score += 5;
console.log(score);

let score = 5;
score += 5;
console.log(score);


// PROGRAMA 9
console.log("Hello!");
console.log('Hello!');
console.log("Hello! I'm a person ");
console.log('I\'m a programmer');
console.log("Hello! \
Welcome to a new line! \
Here's another line");


// PROGRAMA 10
const passphrase = 'Open Sesame';
console.log(passphrase.toLowerCase());
console.log(passphrase.toUpperCase());


// PROGRAMA 11
const name = prompt("What is tour name?");
console.log(name);


// PROGRAMA 12
const name = prompt('What is your name?');
const message = "Hello!" + ' ' + name;
console.log(message);


// PROGRAMA 13
const name = prompt('What is your name?');
const message = `Hello ${name}! It's ${2*2} o'clock`;
console.log(message);


// FIRST WEBAPP - SHOUT APP
const stringToShout = prompt("What do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>The message to shout is: ${shout}</h2>`;
console.log(shoutMessage);

document.querySelector('html').innerHTML= shoutMessage;


// VARIABLES AND STRINGS CHALLENGE
const adj = prompt("Write an adjective of your choice");
const verb = prompt("Write an verb of your choice");
const noun = prompt("Write an noun of your choice");

let story = `<p>On a very ${adj.toLowerCase()} day, a person went out for a ${verb.toLowerCase()} to grab a ${noun.toLowerCase()}</p>`;

document.querySelector('html').innerHTML=story;


// PROGRAMA 14
const answer = prompt("Which planet is closest to the sun?")

if(answer === 'Mercury'){
    console.log("That's Correct!!");
} else{
    console.log("Try again!");
}


// PROGRAMA 15
/*
    The Number Guessing Game
    stores a number between 1 and 10
    and gives the player one attempt to
    guess the number.
*/

// When the game begins the guess is false
let correctGuess = false;
const number = 6; // number to guess
const guess = prompt("Guess a number between 1 and 10")

/* 
    1. Test if a player's guess matches the number
    2. Change the value of correctGuess to true if they match
*/
if(+guess === number){
    correctGuess = true;
} else{
    correctGuess = false;
}

// Test if guess is correct and output response
if(correctGuess === true){
    console.log("You guessed it correctly!!");
} else{
    console.log(`Sorry, the number was ${number}`);
}


// PROGRAMA 16
weather = prompt("What's the weather like today? Sun/Rain/Snow");

if(weather.toLowerCase() === 'sun'){
    console.log("It's sunny, so I'm going swimming!");
} else if(weather.toLowerCase() === 'snow'){
    console.log("It's snowy, so I'm going sledding!");
} else if(weather.toLowerCase() === 'rain') {
    console.log("It's raining, so I'm going to stay inside!");
} else{
    console.log("I don't know what I'm going to do today...");
}


// PROGRAMA 17
let agree = 'yes';

(agree === 'yes' || agree === 'y');


// THE CONDITIONAL CHALLENGE

/* 
    The quiz game will ask the player 
    5 questions about the anime "So I'm a Spider, So What?".
    It outputs the number of correct answers and a rank.
*/


//When the game begins, the number of correct and wrong answers are 0 and the rank is an empty string
let correctAns = 0;
let wrongAns = 0;
let rank = '';


message = alert("All questions are about 'So I'm a Spider, So What?'")
ans1 = prompt("What is the name of the frog monster in the Elroe Labyrinth?");
ans2 = prompt("What is the name of the vampire baby?");
ans3 = prompt("What is Schlain's Earth nickname?");
ans4 = prompt("What is the sensei's nickname?");
ans5 = prompt("What is the nickname of the spider?");

/* 
    1.Test if the given answer to each question is correct or wrong
    2.Change the value of correctAns or wrongAns
*/
if(ans1.toLowerCase() === 'elroe frog'){
    correctAns += 1;
} else{
    wrongAns += 1;
}

if(ans2.toLowerCase() === 'sophia'){
    correctAns += 1;
} else{
    wrongAns += 1;
}

if(ans3.toLowerCase() === 'shun'){
    correctAns += 1;
} else{
    wrongAns += 1;
}

if(ans4.toLowerCase() === 'oka'){
    correctAns += 1;
} else{
    wrongAns += 1;
}

if(ans5.toLowerCase() === 'nightmare'){
    correctAns += 1;
} else{
    wrongAns += 1;
}


//Assign a rank to the player based on the amount of correct answers
if(correctAns === 5){
    rank = 'Gold🥇';
} else if(correctAns === 4 || correctAns === 3){
    rank = 'Silver🥈';
} else if(correctAns === 2 || correctAns === 1){
    rank = 'Bronze🥉';
} else{
    rank = 'Insufficient points';
}


//Output the nummber of correct answers and the rank
document.querySelector('html').innerHTML=`<h1>You scored ${correctAns} out of 5. Your rank is ${rank}</h1>`;
