let mainCont = document.querySelector('.mainconteiner');

let redCube = document.querySelector('.redcube');


let left = 0;

window.onkeydown = function moveLeft() {
    if(event.keyCode == 37) {
        left = left-10;
        redCube.style.left = left + 'px';
    }
    else if (event.keyCode == 39) {
        left = left+10;
        redCube.style.left = left + 'px';
    }

};



window.onkeyup = function moveTop() {
    let top = 0;
    if(event.keyCode == 38) {
        top = top-10;
        redCube.style.top = top + 'px';
    }
    else if (event.keyCode == 40) {
        top = top+10;
        redCube.style.top = top + 'px';
    }
};



