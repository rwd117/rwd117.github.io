const canvas = document.getElementById("jscanvas");
const ctx= canvas.getContext("2d");
const ballRadius = 10;


let canvasWidth = canvas.width/2;
let canvasHeight = canvas.height -30;
let dx = 2;
let dy= -2;


function drawBall() {
    ctx.beginPath();
    ctx.arc(canvasWidth, canvasHeight, ballRadius, 0, 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function draw() {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();

    if(canvasWidth + dx > canvas.width-ballRadius || canvasWidth + dx < ballRadius) {
        dx = -dx;
    }else if(canvasHeight + dy > canvas.height-ballRadius || canvasHeight + dy < ballRadius) {
        dy = -dy;
    }
    canvasWidth += dx;
    canvasHeight += dy;
}



setInterval(draw, 20);
