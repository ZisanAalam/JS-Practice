const box = document.querySelector('.box');

// console.log(box);
box.style.width = '500px';
box.style.height = '500px';
box.style.border = '1px solid black';

function drawCircle(x, y, radius, color) {
    let circle = document.createElement('div');
    circle.style.width = 2 * radius + 'px';
    circle.style.height = 2 * radius + 'px';
    circle.style.borderRadius = '50%';
    circle.style.background = color;
    circle.style.position = 'absolute';
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';

    box.appendChild(circle);
    return circle;


}

var xDistance = 0;
var yDistance = 0;
// var dx = 1;
// var dy = 4;

var dx = Math.random()*5;
var dy = Math.random()*5;
function move(c){
    console.log(c);
    // c.style.left='20px';
    setInterval(()=>{
        if(xDistance>440 || xDistance<0){
            dx = -dx;
            
        }
        if(yDistance<0 || yDistance>440){
            dy = -dy;
        }
        c.style.left = xDistance+"px";
        c.style.top = yDistance+"px";
        xDistance += dx;
        yDistance +=dy;
    },10);
}

var c1 = drawCircle(0, 100, 30, 'red');

// console.log(c);
move(c1);

