const canvas = document.getElementById("jscanvas");
const ctx= canvas.getContext("2d");
const dx = 2;
const dy= -2;

let canvasWidth = canvas.width/2;
let canvasHeight = canvas.height -30;

function drawBall() {
    ctx.beginPath();
    ctx.arc(canvasWidth, canvasHeight, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    canvasWidth += dx;
    canvasHeight += dy;
}


setInterval(draw, 10);
