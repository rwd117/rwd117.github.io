
$(function(){
    $(window).scroll(function(){
        var posTop=$(this).scrollTop();
        console.log(posTop);
            $('aside').stop().animate({
            top : posTop + 128
        });
    });
});