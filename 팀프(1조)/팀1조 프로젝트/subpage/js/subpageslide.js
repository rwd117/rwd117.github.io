
const logo=document.getElementById("jslogo");

let slidewrap = document.querySelector('.sec:nth-of-type(1) .mainslidewrap'),
    slides = document.querySelectorAll('.sec:nth-of-type(1) .mainslidewrap .content'),
    slidecount = slides.length,
    leftbtn=document.querySelector('.sec:nth-of-type(1) .leftbtn'),
    rightbtn=document.querySelector('.sec:nth-of-type(1) .rightbtn'),
    current=0,
    slideWidth =300,
    slidemargin = 50;

    slidewrap.style.width= (slideWidth+slidemargin)*slidecount - slidemargin+65 +"px";

    function rightclick(){
   
        if(current< slidecount -4){
            moverSlide(current+1);
            console.log("으아아아ㅏ");
        }
    }

    function leftclick(){
        if(current > 0 ){
            moverSlide(current-1);
            console.log("으아아아ㅏ");
        }
    }

    function moverSlide(num){
        slidewrap.style.left = -num*350 + "px";
        current = num;
    }



    rightbtn.addEventListener("click",rightclick);

    leftbtn.addEventListener("click",leftclick);


let slidewrap1 = document.querySelector('.sec:nth-of-type(2) .mainslidewrap'),
    slides1 = document.querySelectorAll('.sec:nth-of-type(2) .mainslidewrap .content'),
    slidecount1 = slides.length,
    leftbtn1=document.querySelector('.sec:nth-of-type(2) .leftbtn'),
    rightbtn1=document.querySelector('.sec:nth-of-type(2) .rightbtn'),
    current1=0,
    slideWidth1 =300,
    slidemargin1 = 50;
        
    slidewrap1.style.width= (slideWidth1+slidemargin1)*slidecount1 - slidemargin1+65 +"px";

    function rightclick1(){
   
        if(current1< slidecount1 -4){
            moverSlide1(current1+1);
            console.log("으아아아ㅏ");
        }
    }

    function leftclick1(){
        if(current1 > 0 ){
            moverSlide1(current1-1);
            console.log("으아아아ㅏ");
        }
    }

    function moverSlide1(num){
        slidewrap1.style.left = -num*350 + "px";
        current1 = num;
    }



    rightbtn1.addEventListener("click",rightclick1);

    leftbtn1.addEventListener("click",leftclick1);

let slidewrap2 = document.querySelector('.sec:nth-of-type(3) .mainslidewrap'),
    slides2 = document.querySelectorAll('.sec:nth-of-type(3) .mainslidewrap .content'),
    slidecount2 = slides.length,
    leftbtn2=document.querySelector('.sec:nth-of-type(3) .leftbtn'),
    rightbtn2=document.querySelector('.sec:nth-of-type(3) .rightbtn'),
    current2=0,
    slideWidth2 =300,
    slidemargin2 = 50;
        
    slidewrap2.style.width= (slideWidth2+slidemargin2)*slidecount2 - slidemargin2+65 +"px";

    function rightclick2(){
   
        if(current2< slidecount2 -4){
            moverSlide2(current2+1);
            console.log("으아아아ㅏ");
        }
    }

    function leftclick2(){
        if(current2 > 0 ){
            moverSlide2(current2-1);
            console.log("으아아아ㅏ");
        }
    }

    function moverSlide2(num){
        slidewrap2.style.left = -num*350 + "px";
        current2 = num;
    }


    function goMain(){
        location.href="../mainpage/mainpage.html";
    }


    rightbtn2.addEventListener("click",rightclick2);

    leftbtn2.addEventListener("click",leftclick2);

    logo.addEventListener("click",goMain);