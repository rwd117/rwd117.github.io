const canvas=document.getElementById("jscanvas");
const ctx=canvas.getContext("2d");
const colors = document.getElementsByClassName("jscolor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE =700; 

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth= 2.5;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;

function startPainting(){
    painting=true;
}

function stopPainting(){
    painting=false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x,y);
    console.log(event);
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle=color;
}

function hadleRangeChange(event){
    console.log(event.target.value);
    const strokesize = event.target.value;
    ctx.lineWidth = strokesize;
}

function hadleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";

    }else {

        filling = true;
        mode.innerText = "Paint";
        ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}
function hadleCM(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "쉐에에에에에엣";
    link.click();
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
    canvas.addEventListener("contextmenu", hadleCM);
}

if(colors){
Array.from(colors).forEach(color => color.addEventListener("click",handleColorClick));
}

if(range){
    range.addEventListener("input", hadleRangeChange);
}

if(mode){
    mode.addEventListener("click",hadleModeClick);

}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
