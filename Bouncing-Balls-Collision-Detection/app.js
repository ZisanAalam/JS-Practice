const box = document.querySelector('.box');

// console.log(box);
box.style.width = '800px';
box.style.height = '600px';
box.style.border = '2px solid black';
box.style.position = 'relative';
box.style.left = '200px';
box.style.top = '20px';


function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y
    this.radius = radius;
    this.color = color;
    // this.dx = dx;
    // this.dy = dy;
    var circle;
    this.draw = function() {
        let circle = document.createElement('div');
        this.circle = circle;
        circle.style.width = radius * 2 + 'px';
        circle.style.height = radius * 2 + 'px';
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.top = y + 'px';
        circle.style.left = x + 'px';
        circle.style.background = this.color;
        // circle.style.borderColor = this.color;

        box.appendChild(circle);
    }

    this.xDistance = x;
    this.yDistance = y;
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
    this.update = function() {
        if (this.xDistance + radius * 2 > 800 || this.xDistance < 0) {
            this.dx = -this.dx
        }
        if (this.yDistance + radius * 2 > 600 || this.yDistance < 0) {
            this.dy = -this.dy
        }


        this.xDistance += this.dx;
        this.yDistance += this.dy;

        this.circle.style.left = this.xDistance + 'px';
        this.circle.style.top = this.yDistance + 'px';
    }

}

function getDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}


let circles = [];
let radius = 10;
let maxX = 800 - radius * 2;
let maxY = 600 - radius * 2;
let minX = 0;
let minY = 0;
for (let i = 0; i < 100; i++) {
    let x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    // console.log(x, y);

    if (circles.length != 0) {
        for (let j = 0; j < circles.length; j++) {
            let dis = (getDistance(x, y, circles[j].x, circles[j].y)) - (radius * 2)
            if (dis < 0) {
                x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
                y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

                j = -1;
            }

            console.log(dis);
        }
    }

    circles.push(new Circle(x, y, radius, 'blue'));
    circles[i].draw();
}

function move() {
    setInterval(() => {
        // circles[0].update();
        for (let i = 0; i < circles.length; i++) {
            circles[i].update();

            if (i != 0) {
                for (let j = 0; j < circles.length; j++) {
                    let dis = (getDistance(circles[i].xDistance, circles[i].yDistance, circles[j].xDistance, circles[j].yDistance)) - (radius * 2)
                    if (dis < 0) {

                        circles[i].dx = -circles[i].dx;
                        circles[i].dy = -circles[i].dy;
                        circles[j].dx = -circles[j].dx;
                        circles[j].dy = -circles[j].dy;

                    }
                }
            }




        }
    }, 1);
}

move();






// let circles;

// function init() {
//     circles = [];
//     for (let i = 0; i < 5; i++) {
//         let x = Math.random() * 800;
//         let y = Math.random() * 600;
//         circles.push(new Circle(x, y, 10, 'blue'));
//         // circles[i].draw();
//     }
// }
// console.log(circles.length);
// circles.forEach(circle => {
//     console.log('draw');
//     circle.draw();
// });


// init();