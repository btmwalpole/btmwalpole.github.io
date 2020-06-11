/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bird.jpg') {
      myImage.setAttribute ('src','images/earth.png');
    } else {
      myImage.setAttribute ('src','images/bird.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'GOOOD MOOORNING , ' + myName;
    }
}
    

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'you are sexy, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

/*

var clickCount = 0;

document.querySelector('img').onclick = function() {

    if(clickCount===0){
        alert('Ouch! Stop poking me!')
        clickCount++;
    } else if (clickCount === 1) {
        alert('PLEASE STOP IM SUPER SERIOUSLY RIGHT NOW')
        clickCount++;
    } else (
        alert('u killed me i am ded now. goodbye.')
    )
    
}

*/