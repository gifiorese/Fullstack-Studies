/** */

// PROGRAMA 18

//This returns a random number
function getRandomNumber(upper){
    return Math.floor(Math.random() * upper) + 1;
}

//Loop
let i = 0;

while(i < 10){
    console.log(`The random number is ${getRandomNumber(10)}`);
    i += 1;
}


// PROGRAMA 19

//This returns a random number
function getRandomNumber(upper){
    return Math.floor(Math.random() * upper) + 1;
}

//Loop
let i = 0;

do {
    console.log(`The random number is ${getRandomNumber(10)}`);
    i++;
} while(i < 10);


// PROGRAMA 20

//This returns a random number
function getRandomNumber(upper){
    return Math.floor(Math.random() * upper) + 1;
}

//Loop
for(let i = 0; i < 10; i++){
    console.log(`The random number is ${getRandomNumber(10)}`);
}


// PROGRAMA 21

const html = document.querySelector('html')
let text = '';

for(let i = 0; i < 10; i++){
    text += `<div> ${i} </div>`;
}

html.innerHTML = text;


// THE REFRACTOR CHALLENGE

/*
    This challenge was solved in a different file
    in order to run the styled html file.
*/

//Base code
let html = '';
let red;
let green;
let blue;
let randomRGB;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

document.querySelector('main').innerHTML=html;

//DRY code
let html = '';
let red;
let green;
let blue;
let randomRGB;

for(let i = 1; i <= 10; i++) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomRGB = `rgb(${red}, ${green}, ${blue})`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML=html;