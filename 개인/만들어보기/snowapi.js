const myCanvas=document.getElementById("jscanvas");
const ctx=myCanvas.getContext("2d");
const snow_max = 500;
const Width=800;
const Height=600;

let snow=new Array();
let init=false;

function snowSet(){
    if(init==false){
        for(i=0;i<snow_max;i++){
        var obj=new Object();
        obj.x=Math.random()*Width;
        obj.y=Math.random()*Height;
        obj.size=Math.sqrt(Math.random()*50)+1;
        obj.alpha=Math.random();
        snow.push(obj);
        console.log(obj);    
        }
        init=true;
    }   
}   

function Start(){
    for(i=0;i<snow_max;i++){
        snow[i].y=snow[i].y+(snow[i].size*0.9);
        if(snow[i].y>=Height)snow[i].y=-10;
    }
    SnowDraw();
}

function SnowDraw(){
     if(init==false)return;
     ctx.clearRect(0, 0, Width, Height);
    for(i=0;i<snow_max;i++){
        ctx.beginPath();
        ctx.moveTo(snow[i].x,snow[i].y);
        ctx.fillStyle='rgba(255,255,255,'+snow[i].alpha+')';
        ctx.arc(snow[i].x,snow[i].y,snow[i].size,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
    ctx.fillter="none";
}


if(myCanvas){
    snowSet();
	setInterval(Start, 40);
}

