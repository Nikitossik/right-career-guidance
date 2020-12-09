$(document).ready(function(){
    // предотвращение прокрутки браузером страницы при загрузке
    history.scrollRestoration = "manual";

    $(window).on('beforeunload', function(){
        $(this).scrollTop(0);
    });

    $('.menu_btn').click(function(){
        $('.menu_btn, .nav .main').toggleClass('active');
        $("body").toggleClass('noscroll');
    });

    $('.nav .main a').each(function(){
        $(this).click(function(){
            $('.menu_btn, .nav .main').toggleClass('active');  
            $("body").toggleClass('noscroll');
        });
    });

    $('.header h1').css('animation', 'zoomInDown 1s');
    $('.header a').css('animation', 'backInRight 1.5s');
    $('.nav').css('animation', 'bounceInDown 1.5s');
    
    $(window).scroll(function(){
        let winTop = $(window).scrollTop(), pos;
        $('.nav').toggleClass('sticky', winTop > 0)
        $('.header').css('background-position-y', -winTop*0.6 + 'px');
        $('.header .content h1').css('transform', 'translateX('+ -winTop*0.3 +'px)');



        pos = $('#why .animated.anim_1').offset().top;
        if (pos < winTop + 700) $("#why .animated.anim_1").addClass("bounceInLeft");


        pos = $('#why .animated.anim_2').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#why .animated.anim_2").addClass("bounceInRight");


        pos = $('#strategy .animated.anim_3').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#strategy .animated.anim_3").addClass("zoomInLeft");


        pos = $('#strategy .animated.anim_4').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#strategy .animated.anim_4").addClass("zoomInRight");



        pos = $('#our_alg .animated.anim_1').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#our_alg .content.animated.anim_1").addClass("zoomInDown");


        pos = $('#our_alg .animated.anim_2').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#our_alg .content.animated.anim_2").addClass("zoomIn");


        pos = $('#our_alg .animated.anim_3').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#our_alg .content.animated.anim_3").addClass("zoomInUp");


        
        pos = $('#mistakes .animated.anim_1').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#mistakes .animated.anim_1").addClass("zoomInLeft");


        pos = $('#mistakes .animated.anim_2').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#mistakes .animated.anim_2").addClass("zoomInRight");


        pos = $('#mistakes .animated.anim_3').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#mistakes .animated.anim_3").addClass("zoomInLeft");

        pos = $('#mistakes .animated.anim_4').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#mistakes .animated.anim_4").addClass("zoomInRight");


        pos = $('#mistakes .animated.anim_5').offset().top;
        winTop = $(window).scrollTop();
        if (pos < winTop + 700) $("#mistakes .animated.anim_5").addClass("zoomInLeft");
    });
});
