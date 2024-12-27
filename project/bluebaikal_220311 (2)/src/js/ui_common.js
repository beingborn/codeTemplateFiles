$(function(){

    let $window = $(window);
    let headerHegiht = $('header').outerHeight();

    function stickyMove() {
        if ($window.scrollTop() >= $('header').outerHeight()) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    }

    function animation() {
        let target = $('[data-role="bgUp"]');

        if ($window.scrollTop() >= $('.main-who1').offset().top - headerHegiht) {
            $('.main-who1').addClass('animate');
        } else {
            $(target).removeClass('animate');

        }
    }

    $window.on('scroll', stickyMove);
    $window.on('scroll', animation);

    // main slide
    let mainSwiper = new Swiper('.main-swiper', {
        // loop: true,
        slidesPerView : 1,
        watchOverflow : true,
        navigation: {
            nextEl: $('.main-swiper .swiper-button-next'),
            prevEl: $('.main-swiper .swiper-button-prev'),
        },
        pagination: {
            el: '.main-swiper .swiper-pagination',
            clickable: true,
        },
        on: {
            init: function() {
                if ($('.main-swiper .swiper-slide-active').attr('data-slide-theme') === 'white') {
                    $('header').removeClass('theme-type2').addClass('theme-type1');
                } else {
                    $('header').removeClass('theme-type1').addClass('theme-type2');
                }
            },
            slideChangeTransitionStart: function() {
                if ($('.main-swiper .swiper-slide-active').attr('data-slide-theme') === 'white') {
                    $('header').removeClass('theme-type2').addClass('theme-type1');
                } else {
                    $('header').removeClass('theme-type1').addClass('theme-type2');
                }
            },
        },
    });
    
    // header navigation
    $('header nav').on('click', 'a', function(e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({scrollTop:$(target).offset().top - headerHegiht / 1.45}, 500);

        if ($('header .inner').hasClass('mobile-hd')) {
            $('nav, .top-util').toggle();
            $('header .inner').toggleClass('mobile-hd');
            $('.allmenu').find('img').attr('src', '../src/image/allmenu.png');
            $('.main-logo img').attr('src', '../src/image/main_logo.png');
        } 
    });

    // animation
    AOS.init();

    // popup
    $('.core-wrap .detail').on('click', function(e) {
        e.preventDefault();
        let idx = $(this).closest('.member-list').index();
        $('.dim').show();
        $('.pop-member-core').show();
        $('.pop-member-core .pop-content').eq(idx).show();
    });
    $('.advisors-wrap .detail').on('click', function(e) {
        e.preventDefault();
        let idx = $(this).closest('.member-list').index();
        $('.dim').show();
        $('.pop-member-advisors').show();
        $('.pop-member-advisors .pop-content').eq(idx).show();
    });
    $('.pop-members .btn-close').on('click', function(e) {
        e.preventDefault();
        $('.dim').hide();
        $('.pop-members').hide();
        $('.pop-members .pop-content').hide();
    });

    // newsroom
    $('.btn-newsroom').on('click', function(e) {
        e.preventDefault();
        $('.dim').show();
        $('.pop-newsroom').show();
    });
    $('.pop-newsroom .btn-close').on('click', function(e) {
        e.preventDefault();
        $('.dim').hide();
        $('.pop-newsroom').hide();
    });

    // mobile allmenu
    $('.allmenu').on('click', function(e) {
        e.preventDefault();
        $('.allmenu').find('img').attr('src', '../src/image/allmenu.png');
        $('.main-logo img').attr('src', '../src/image/main_logo.png');
        $('nav, .top-util').toggle();
        $('header .inner').toggleClass('mobile-hd');
        if ($('header .inner').hasClass('mobile-hd')) {
            $(this).find('img').attr('src', '../src/image/allmenu_close.png');
            $('.main-logo img').attr('src', '../src/image/main_logo_blue.png');
        } 
    });

    let controller = new ScrollMagic.Controller(); 
    let tween1 = TweenMax.to('.ui-animate1', 1.5, { 
        y: 150
    });  
    let scene1 = new ScrollMagic.Scene({ 
        triggerElement: '.ui-trigger1', 
        duration: '100%', 
    }) 
    .setTween(tween1) 
    .addTo(controller) 

});
