let mainCont = document.querySelector('.mainconteiner');

let redCube = document.querySelector('.redcube');

let left1 = 0;
let top1 = 0;

// function moveCube(cubeElement, direction, currentPosition, directionSide, defaultMargin = 10) {
//     let newPosition = 0;
//     if(directionSide === 'plus'){
//         newPosition = currentPosition + defaultMargin;
//     } else if(directionSide === 'minus') {
//         newPosition = currentPosition - defaultMargin;
//     }
//     if(direction === 'right') {
//         cubeElement.style.left = newPosition + 'px';

//     } else if(direction === 'top') {
//         cubeElement.style.top = newPosition + 'px';
//     } 
//     return newPosition;
// };

let pressUp = document.querySelector('.pressup');

pressUp.addEventListener('click', () => {
    if (top1 <= 0) return;
    redCube.style.top = top1 + 'px';
    top1 = top1 - 10;
    });

let pressDown = document.querySelector('.pressdown');

pressDown.addEventListener('click', () => {
    if (top1 >= 400 ) return;
     redCube.style.top = top1 + 'px';
     top1 = top1 + 10;
    });

let pressRight = document.querySelector('.pressright');

 pressRight.addEventListener('click', () => {
    console.log(left1);
    if (left1 >= 900) return;
    redCube.style.left = left1 + 'px';
        left1 = left1 + 10;
    });
let pressLeft = document.querySelector('.pressleft');

 pressLeft.addEventListener('click', () => {
    if (left1 <= 0) return;
    redCube.style.left = left1 + 'px';
        left1 = left1 - 10;
    });

document.onkeydown = function (event){
  
    if (event.key == 'ArrowRight') {
       if (left1 >= 900) return;
       redCube.style.left = left1 + 'px';
       left1 = left1 + 5;
    }
     else if (event.key == 'ArrowDown') {
        if (top1 >= 400) return;
       redCube.style.top = top1 + 'px';
       top1 = top1 + 5;
    }
    if (event.key == 'ArrowLeft') {
        if (left1 <= 0) return;
        redCube.style.left = left1 + 'px';
        left1 = left1 - 5;
    }
    else if (event.key == 'ArrowUp') {
        if (top1 <= 0) return;
       redCube.style.top = top1 + 'px';
        top1 = top1 - 5;
    };
};



