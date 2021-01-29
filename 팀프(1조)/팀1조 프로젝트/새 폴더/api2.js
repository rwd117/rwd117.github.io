var test=document.getElementById("KK");
var II=document.getElementById("II");
var TT=document.getElementById("TT");
var YY=document.getElementById("YY");
var UU=document.getElementById("UU");
var PP=document.getElementById("PP");

function xx(){
    var tValue=test.options[test.selectedIndex].value;
    var iValue=II.options[II.selectedIndex].value;
    if(tValue==01){
        II.classList.add('open');
        TT.classList.remove('open');
        YY.classList.remove('open');
        UU.classList.remove('open');
        PP.classList.remove('open');

    }else if(tValue==02){
        TT.classList.add('open');
        II.classList.remove('open');
        YY.classList.remove('open');
        UU.classList.remove('open');
        PP.classList.remove('open');

    }else if(tValue==03){
        YY.classList.add('open');
        TT.classList.remove('open');
        II.classList.remove('open');
        UU.classList.remove('open');
        PP.classList.remove('open');

    }else if(tValue==04){
        UU.classList.add('open');
        TT.classList.remove('open');
        YY.classList.remove('open');
        II.classList.remove('open');
        PP.classList.remove('open');

    }else if(tValue==05){
        PP.classList.add('open');
        TT.classList.remove('open');
        YY.classList.remove('open');
        UU.classList.remove('open');
        II.classList.remove('open');
    }else {
        PP.classList.remove('open');
        TT.classList.remove('open');
        YY.classList.remove('open');
        UU.classList.remove('open');
        II.classList.remove('open');
    }
}

if(test){
    test.addEventListener('click',xx);
}