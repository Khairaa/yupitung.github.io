let myImage = document.querySelector('img');

myImage.onclick = function() {
    mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pantai belitung.JPG'){
        myImage.setAttribute('src', 'images/ojodumeh.jpg');
    } else {
        myImage.setAttribute('src', 'images/pantai belitung.JPG');
    }

}

let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h2');

function setUsername() {
    let uName = prompt('Enter your username: ');
    if(!uName) {
        setUsername();
    } else {
    localStorage.setItem('name', uName);
    myHeading2.textContent = 'Eh, ' + uName + '! Selamat datang!';
    }
}

if(!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedname = localStorage.getItem('name');
    myHeading2.textContent = 'Eh, ' + storedname + '! Selamat datang!';
}

myButton.onclick = function(){
    setUsername();
}