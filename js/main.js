let mainCont = document.querySelector('.mainconteiner');

let redCube = document.querySelector('.redcube');

let left1 = 0;
let top1 = 0;


let pressUp = document.querySelector('.pressup');

pressUp.addEventListener('click', () => {
    if (top1 <= 0 || (top1 >=250 && top1 <=340)&&(left1 >=50 && left1 <=250)||
    (top1 >= 50 && top1 <= 240) &&  (left1 >= 550 && left1 <= 750)) return;
    redCube.style.top = top1 + 'px';
    top1 = top1 - 5;
    });

let pressDown = document.querySelector('.pressdown');

pressDown.addEventListener('click', () => {
    if (top1 >= 400 ||(top1 >=160 && top1 <=250)&&(left1>=50 && left1<=250) || 
    (top1>=60 && top1 <= 250) && (left1 >=550 &&  left1 <= 750) ) return;
     redCube.style.top = top1 + 'px';
     top1 = top1 + 5;
    });

let pressRight = document.querySelector('.pressright');

 pressRight.addEventListener('click', () => {
    
    if (left1 >= 900 || (left1>=50 && left1 <= 250) && (top1 >= 150 && top1 <= 350) ||
    (left1 >= 550 && left1 <= 750) && (top1 >= 50 && top1 <= 250)) return;
    redCube.style.left = left1 + 'px';
        left1 = left1 + 5;
    });
let pressLeft = document.querySelector('.pressleft');

 pressLeft.addEventListener('click', () => {
     if (left1 <= 0 || (left1>=50 && left1 <= 250) && (top1 >= 150 && top1 <= 350) ||
    (left1 >= 550 && left1 <= 750) && (top1 >= 50 && top1 <= 250)) return;
    redCube.style.left = left1 + 'px';
        left1 = left1 - 5;
    });

document.onkeydown = function (event){
  
    if (event.key == 'ArrowRight') {
       if (left1 >= 900 || (left1>=50 && left1 <= 250) && (top1 >= 150 && top1 <= 350) ||
       (left1 >= 550 && left1 <= 750) && (top1 >= 50 && top1 <= 250)) return;
       redCube.style.left = left1 + 'px';
       left1 = left1 + 5;
    }
     else if (event.key == 'ArrowDown') {
        if (top1 >= 400 || (top1 >=150 && top1 <=250)&&(left1>=50 && left1<=250)|| 
        (top1 >= 50 && top1 <= 240) && (left1 >=550 &&  left1 <= 750) ) return;
       redCube.style.top = top1 + 'px';
       top1 = top1 + 5;
    }
    if (event.key == 'ArrowLeft') {
        if (left1 <= 0 || (left1>=50 && left1 <= 250) && (top1 >= 150 && top1 <= 350) ||
        (left1 >= 550 && left1 <= 750) && (top1 >= 50 && top1 <= 250)) return;
        redCube.style.left = left1 + 'px';
        left1 = left1 - 5;
    }
    else if (event.key == 'ArrowUp') {
        if (top1 <= 0 || (top1 >=250 && top1 <=350) && (left1 >=50 && left1 <=250) ||
        (top1 >= 50 && top1 <= 250) &&  (left1 >= 550 && left1 <= 750)) return;
       redCube.style.top = top1 + 'px';
        top1 = top1 - 5;
    };
};



