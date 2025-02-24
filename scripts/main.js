const myImage = document.querySelector('img');

myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2.jpg') {
      myImage.setAttribute('src', 'images/3.jpg');
    } else {
      myImage.setAttribute('src', 'images/2.jpg');
    }
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
}

setUserName = function() {
    const myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }   
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
