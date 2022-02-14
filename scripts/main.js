var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/pepe.png') {
        myImage.setAttribute('src', 'images/pepe_cry.png');
    } else {
        myImage.setAttribute('src', 'images/pepe.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Pepe is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Pepe is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}