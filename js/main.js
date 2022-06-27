let mainCont = document.querySelector('.mainconteiner');

let redCube = document.querySelector('.redcube');

let left1 = 0;
let top1 = 0;


function moveCube(cubeElement, direction, currentPosition, directionSide, defaultMargin = 5) {
    let newPosition = 0;
    if(directionSide === 'plus'){
        newPosition = currentPosition + defaultMargin;
    } else if(directionSide === 'minus') {
        newPosition = currentPosition - defaultMargin;
    }
    if(direction === 'right') {
        cubeElement.style.left = newPosition + 'px';

    } else if(direction === 'top') {
        cubeElement.style.top = newPosition + 'px';
    } 
    return newPosition;
};


let pressUp = document.querySelector('.pressup');

pressUp.addEventListener('click', () => {
    if (top1 <= 0 || (top1 >=250 && top1 <=345)&&(left1 >=55 && left1 <=245)||
        (top1 >= 50 && top1 <= 250) &&  (left1 >= 555 && left1 <= 745)) return;
        top1 = moveCube(redCube, 'top', top1, 'minus');
        });

let pressDown = document.querySelector('.pressdown');

pressDown.addEventListener('click', () => {
    if (top1 >= 395 ||(top1 >=150 && top1 <=250)&&(left1>=55 && left1<=245) || 
        (top1>=50 && top1 <= 250) && (left1 >=555 &&  left1 <= 745) ) return;
        top1 = moveCube(redCube, 'top', top1, 'plus');
    });

let pressRight = document.querySelector('.pressright');

 pressRight.addEventListener('click', () => {
    if (left1 >= 895 || (left1>=50 && left1 <= 245) && (top1 >= 155 && top1 <= 345) ||
        (left1 >= 550 && left1 <= 745) && (top1 >= 55 && top1 <= 245)) return;
        left1 = moveCube(redCube, 'right', left1, 'plus');
    });

let pressLeft = document.querySelector('.pressleft');

 pressLeft.addEventListener('click', () => {
    if (left1 <= 0 || (left1>=55 && left1 <= 245) && (top1 >= 155 && top1 <= 345) ||
        (left1 >= 555 && left1 <= 750) && (top1 >= 55 && top1 <= 245)) return;
        left1 = moveCube(redCube, 'right', left1, 'minus');
    });

document.onkeydown = function (event){
  
    if (event.key == 'ArrowRight') {
        if (left1 >= 895 || (left1>=50 && left1 <= 245) && (top1 >= 155 && top1 <= 345) ||
        (left1 >= 550 && left1 <= 745) && (top1 >= 55 && top1 <= 245)) return;
        left1 = moveCube(redCube, 'right', left1, 'plus');
        };

    if (event.key == 'ArrowDown') {
        if (top1 >= 395 ||(top1 >=150 && top1 <=250)&&(left1>=55 && left1<=245) || 
        (top1>=50 && top1 <= 250) && (left1 >=555 &&  left1 <= 745) ) return;
        top1 = moveCube(redCube, 'top', top1, 'plus');
        };
    
    if (event.key == 'ArrowLeft') {
        if (left1 <= 0 || (left1>=55 && left1 <= 250) && (top1 >= 155 && top1 <= 345) ||
        (left1 >= 555 && left1 <= 750) && (top1 >= 55 && top1 <= 245)) return;
        left1 = moveCube(redCube, 'right', left1, 'minus');
        };
    
    if (event.key == 'ArrowUp') {
         if (top1 <= 0 || (top1 >=250 && top1 <=345)&&(left1 >=55 && left1 <=245)||
        (top1 >= 50 && top1 <= 250) &&  (left1 >= 555 && left1 <= 745)) return;
        top1 = moveCube(redCube, 'top', top1, 'minus');
        };
    
};



