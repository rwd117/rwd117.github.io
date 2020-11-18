function check(a){
    var oid=a.id.value;
    var opw=a.pwd.value;
    var omail=a.mail.value;
    var ato=omail.indexOf("@");//@의 위치값 전달
    var ten=omail.indexOf(".");
    var oju1=a.jumin1.value;
    var oju2=a.jumin2.value;


    if(oid=="") {
        alert("dd");
        a.id.focus();
        return false;
    }

    if(oid.length<6){
        alert("짧다")
        a.id.select();
        return false;

    }
    for(var i=0;i<oid.length;i++){
        var oid=oid.toUpperCase();
        if(!(('0'<=oid.charAt(i)&&oid.charAt(i)<='9')||('A'<=oid.charAt(i)&&oid.charAt(i)<='Z')))
        {//숫자가 아니거나 대문자인경우,숫자가 있고 영어가 아닌경우 된다.
            alert("숫,영소");
            a.id.select();
            return false;
        }
        
    }
 
    if(opw==""){
        alert("비번을 입력")
        a.pwd.focus();
        return false;
    }
    if(omail==""){
        alert("이메일 입력")
        a.mail.focus();
        return false;
    }
    
    if(ato<1||ten<1){
        alert("메일 다시 확인.")
        a.mail.select();
        return false;
    }

    if(oju1.length!=6||oju2.length!=7){
        alert("주민번호 확인");
        return false;
    }

    var hap=0;
    for(var i=0;i<6;i++){
        hap=hap+(oju1.charAt(i)*(i+2));
    }
    
    var n1=oju2.charAt(0);
    var n2=oju2.charAt(1);
    var n3=oju2.charAt(2);
    var n4=oju2.charAt(3);
    var n5=oju2.charAt(4);
    var n6=oju2.charAt(5);
    var n7=oju2.charAt(6);
    
    hap=hap+(n1*8+n2*9+n3*2+n4*3+n5*4+n6*5);
    
    hap=(11-(hap%11))%10;
    
    if(hap!=n7){
        alert("주민번호가 틀림");
        return false;
    }


    return true;

}