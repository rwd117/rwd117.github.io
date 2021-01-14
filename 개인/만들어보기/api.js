const main=document.getElementById('jspad'),
      btndiv=document.getElementById('jsbtn'),
      content=document.getElementById('jscontent'),
      samplecontent=document.getElementById('jssamplecontent'),
      leftbtn=document.getElementById('jsleft'),
      rightbtn=document.getElementById('jsright'),
      slides=document.querySelectorAll('.mycontent');

function aa(){
    content.classList.add('colorchange');
    samplecontent.style.display = 'block';
}

function bb(){
    content.classList.remove('colorchange');
    samplecontent.style.display = 'none';
}

      
let current = 0,
    slideHeight = 1600,
    slideMargin = 10,
    slidecount=slides.length;    

samplecontent.style.height= (slideHeight+slideMargin)*slidecount - slideMargin+80 +"px";

function rightclick(){
  
    if(current< slidecount -1){
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
    samplecontent.style.top = -num*1050 + "px";
    current = num;
}


if(main){
    btndiv.addEventListener('mouseover',aa);
    main.addEventListener('mouseover',aa);
    main.addEventListener('mouseout',bb);
    btndiv.addEventListener('mouseout',bb);
}


if(btndiv){
    rightbtn.addEventListener('click',rightclick);
    leftbtn.addEventListener('click',leftclick);
}

