
$(function(){
    var win=$(window);
    var headertop=$('header').offset().top;
    win.scroll(function(){
        if(win.scrollTop() > headertop){
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});

