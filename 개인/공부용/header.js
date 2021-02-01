const   canvas=document.getElementById('jscanvas'),
        ctx=canvas.getContext('2d'),
        Width=1600,
        Height=200,
        max=300;
        
canvas.width=Width;
canvas.height=Height;

function xx(){
    
   draw();
}

function draw(){
    let colorcode="#"+Math.round(Math.random()*0xffffff).toString(16),
    colorcode1="#"+Math.round(Math.random()*0xffffff).toString(16),
    colorcode2="#"+Math.round(Math.random()*0xffffff).toString(16);  

    ctx.fillStyle=colorcode;
    ctx.fillRect(Math.random()*Width/3, Math.random()*Height, Math.random()*50, Math.random()*50);

    ctx.fillStyle=colorcode1;
    ctx.fillRect(Width/3+(Math.random()*Width/3),Math.random()*Height,Math.random()*50,Math.random()*50);

    ctx.fillStyle=colorcode2;
    ctx.fillRect(Width/3+Width/3+(Math.random()*Width/3),Math.random()*Height,Math.random()*50,Math.random()*50);

}


if(canvas){
    setInterval(xx,100);
}
