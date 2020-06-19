var lights;
var colorBg = document.querySelector('.body');

function Greetings(){
    var container = document.querySelector('.inner-container');
    container.style.visibility = 'hidden';
    var secondContainer = document.querySelector('.second-container');
    secondContainer.style.visibility = 'visible';
    lights = setInterval(changeBackgroundColor,120);
}

function Back(){
    var secondContainer = document.querySelector('.second-container');
    secondContainer.style.visibility = 'hidden';
    var container = document.querySelector('.inner-container');   
    container.style.visibility = 'visible'; 
    clearInterval(lights);
    colorBg.style.backgroundColor = 'rgba(235, 65, 53)';
}

function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
    colorBg.style.backgroundColor = generateRandomColor();
}