const box = document.querySelector('.box');

// console.log(box);
box.style.width = '500px';
box.style.height = '500px';
box.style.border = '1px solid black';
box.style.position = 'relative';
box.style.top = '20px';
box.style.left = '400px';



function Circle(x, y, radius, dx = 1, dy = 1) {
    this.x = x;
    this.y = y
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
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
        circle.style.background = 'black';

        box.appendChild(circle);
    }

    this.xDistance = x;
    this.yDistance = y;
    this.upate = function() {
        if (this.xDistance + radius * 2 > 500 || this.xDistance < 0) {
            this.dx = -this.dx
        }
        if (this.yDistance + radius * 2 > 500 || this.yDistance < 0) {
            this.dy = -this.dy
        }


        this.xDistance += this.dx;
        this.yDistance += this.dy;

        this.circle.style.left = this.xDistance + 'px';
        this.circle.style.top = this.yDistance + 'px';



        //    setInterval(() =>{
        //     this.circle.style.left = this.xDistance + 'px';
        //     this.circle.style.top = this.yDistance + 'px';

        //     if(this.xDistance+radius*2 >500 || this.xDistance<0 ){
        //         this.dx = -this.dx
        //     }
        //     if(this.yDistance+radius*2 >500 || this.yDistance<0 ){
        //         this.dy = -this.dy
        //     }


        //     this.xDistance += this.dx;
        //     this.yDistance += this.dy;
        //    },10);
    }
}

function getDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;

    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}


let c1 = new Circle(100, 100, 50, Math.random() * 5, Math.random() * 10);
c1.draw();
// c1.move();


let c2 = new Circle(200, 200, 50, Math.random() * 5, Math.random() * 10);
c2.draw();
// c2.move();

function move() {
    setInterval(() => {
        c1.upate();
        c2.upate();

        var dis = getDistance(c1.xDistance, c1.yDistance, c2.xDistance, c2.yDistance);
        console.log(dis);
        console.log("Border", dis - (c1.radius + c2.radius));

        let borderDistance = dis - (c1.radius + c2.radius);
        if (borderDistance < 0) {
            c1.dy = -c1.dy;
            c2.dx = -c2.dx;
            c2.dy = -c2.dy;
        }


    }, 10);
}

move();