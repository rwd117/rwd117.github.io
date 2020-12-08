$(function(){
    var $menu=$('.gnb ul li'),
    $contents=$('.main section');

    $menu.click(function (e){
        e.preventDefault();

        var idx=$(this).index();
        var section = $contents.eq(idx);
        console.log(idx);
        console.log(section);
        var sectionDistance = section.offset().top;

        $('html, body').stop().animate({scrollTop : sectionDistance},400);


    });

    $(window).scroll(function(){
        $contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var index=$(this).index();
                $menu.removeClass('active');
                $menu.eq(idx).addClass('active');
            }
        })
    })

});
