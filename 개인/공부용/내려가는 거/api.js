const   canvas=document.getElementById('jscanvas'),
        ctx=canvas.getContext('2d'),
        size=700,
        max=300;
        
canvas.width=size;
canvas.height=size;



function xx(){
    
   draw();
}

function draw(){
    let colorcode="#"+Math.round(Math.random()*0xffffff).toString(16),
    colorcode1="#"+Math.round(Math.random()*0xffffff).toString(16),
    colorcode2="#"+Math.round(Math.random()*0xffffff).toString(16);  

    ctx.fillStyle=colorcode;
    ctx.fillRect(Math.random()*size/3, Math.random()*size, Math.random()*50, Math.random()*50);

    ctx.fillStyle=colorcode1;
    ctx.fillRect(size/3+(Math.random()*size/3),Math.random()*size,Math.random()*50,Math.random()*50);

    ctx.fillStyle=colorcode2;
    ctx.fillRect(size/3+size/3+(Math.random()*size/3),Math.random()*size,Math.random()*50,Math.random()*50);

}



if(canvas){
    setInterval(xx,100);
}
