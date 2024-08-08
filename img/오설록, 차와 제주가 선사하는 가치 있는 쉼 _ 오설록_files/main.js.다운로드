"use strict";

$(document).ready(function(){

  // lazy loading
  function lazyLoadImages(){

    var images = document.querySelectorAll('img[data-src]');
    var scrolledHeight = window.scrollY + window.innerHeight;

    images.forEach( image => {
      var imageTop = image.getBoundingClientRect().top;
      if ( imageTop < scrolledHeight ) {
        image.src = image.getAttribute('data-src');
        image.removeAttribute('data-src');
      }
    });
  }

  function scrolledImageLoading() {
    var pageHeight = document.documentElement.scrollHeight;
    var scrolledHeight = window.scrollY + window.innerHeight;
    if (scrolledHeight > pageHeight * 0.55) {
      lazyLoadImages();
    }
  }

  $(window).on('scroll', function(){
    scrolledImageLoading();
  });

  /* 메인 상단 띠배너 */
  /* var options = {};
   if ( $(".banner_list .item").length > 1 ) {
     options = {
       direction: "vertical",
       slidesPerView: 1,
       centeredSlides: true,
       spaceBetween: 0,
       speed: 1000,
       loop:true,
       autoplay: {
         delay: 3500,
       },
     }
   } else {
     options = {
       loop: false,
       autoplay: false,
     }
   }
   var swiper = new Swiper('.banner_list', options);*/

  if ( $(".banner_list .item").length > 0 ) {

    var options = {};
    if ( $(".banner_list .item").length > 1 ) {
      options = {
        direction: "vertical",
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        speed: 1000,
        loop:true,
        autoplay: {
          delay: 3500,
        },
      }
    } else {
      options = {
        loop: false,
        autoplay: false,
      }
    }
    var swiper = new Swiper('.banner_list', options);

  } else {

    $('body').addClass('no_top_bn');

  }



  /* 메인배너 */
  var mainSwiperLength = $('.cdj_renew .main_banner_slide .swiper-slide').length;

  $('.cdj_renew .main_banner_slide .swiper_fraction .total').text(mainSwiperLength);

  var mainSwiper = new Swiper('.cdj_renew .main_banner_slide', {
    threshold: 5,
    spaceBetween: 0,
    effect: "fade",
    centeredSlides: true,
    loop: true,
    preloadImages: true,
    lazy: {loadPrevNext: true},
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".cdj_renew .main_banner_slide .main_slide_next",
      prevEl: ".cdj_renew .main_banner_slide .main_slide_prev",
    },
    pagination: {
      el: '.cdj_renew .main_banner_slide .swiper_pagination',
      type: 'bullets',
      clickable: true
    }
  });

  mainSwiper.on('slideChange', function(){
    $('.cdj_renew .main_banner_slide .swiper_fraction .current').text(this.realIndex + 1);
  });

  $('.cdj_renew .main_banner_slide .swiper_btn_play').on('click', function(){
    mainSwiper.autoplay.start();
    $(this).parent().toggleClass('on');
  });

  $('.cdj_renew .main_banner_slide .swiper_btn_pause').on('click', function(){
    mainSwiper.autoplay.stop();
    $(this).parent().toggleClass('on');
  });


  /* 메인배너 전체보기 (모바일만) */
  $('.cdj_renew .main_banner .swiper_fraction .more').on('click', function (){
    $('#main_banner_layer').show();
    $('html, body').addClass('bg_noScroll');
  });

  $('.cdj_renew .main_banner_layer .layer_header .main_banner_layer_close').on('click', function (){
    $('#main_banner_layer').hide();
    $('html, body').removeClass('bg_noScroll');
  });

  $(window).on('resize', function(){
    if ( $('#main_banner_layer').length > 0 ) {
      if ( $(window).outerWidth() > 1024 ) {
        $('#main_banner_layer').hide();
        $('html, body').removeClass('bg_noScroll');
      }
    }
  });




  /* 메인 퀵메뉴 (모바일만) */
  var quickSwiper = new Swiper('.cdj_renew .quick_banner_slide', {
    spaceBetween: 15,
    slidesPerView: 4.2,
  });


  /* 메인 공지사항 */
  var ticker = function() {
    setTimeout(function(){
      $('#notice_list li:first').animate( {marginTop: '-20px'}, 400, function()
      {
        $(this).detach().appendTo('ul#notice_list').removeAttr('style');
      });
      ticker();
    }, 3000);
  };
  ticker();


  /* 메인 상품리스트 */
  var $prdTabItem = $('.cdj_renew .main_prd_list .tit_box .prd_tab .tab_item');
  var $prdTabCon = $('.cdj_renew .main_prd_list .prd_tab_con');

  $prdTabItem.on('click',function (){
    var idx = $(this).index();

    $(this).addClass('on').siblings().removeClass('on').parents('.main_prd_list').find('.prd_tab_con').eq(idx).addClass('on').siblings().removeClass('on');
  });


  var prdSwiperBreak = true;
  var prdSwiper = [];

  if ( $(window).outerWidth() > 1024 ) {
    prdSwiperInit_PC();
  } else {
    prdSwiperInit_MO();
  }

  $(window).on('resize', function(){
    if ( prdSwiperBreak ) {
      prdSwiperBreak = false;

      setTimeout(function(){
        if ( $(window).outerWidth() > 1024 ) {
          prdSwiperInit_PC();
        } else {
          prdSwiperInit_MO();
        }

        prdSwiperBreak = true;
      },100);
    }
  });

  function prdSwiperInit_PC() {
    $('.cdj_renew .prd_tab_con').each(function(index){
      if ( !$(this).find('.prd_list_slide').hasClass('pc') ) {
        if ( prdSwiper[index] !== undefined ) {
          prdSwiper[index].destroy(true, true);
        }

        prdSwiper[index] = new Swiper($(this).find('.prd_list_slide'), {
          slidesPerView: 5,
          spaceBetween: 20,
          speed: 1000,
          loop: true,
          preloadImages: true,
          lazy: {loadPrevNext: true},
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: $(this).find('.main_slide_next'),
            prevEl: $(this).find('.main_slide_prev')
          },
          pagination: {
            el: $(this).find('.swiper-pagination')
          }
        });

        $(this).find('.prd_list_slide').addClass('pc').removeClass('mo');
      }
    });
  }

  function prdSwiperInit_MO() {
    $('.cdj_renew .prd_tab_con').each(function(index){
      if ( !$(this).find('.prd_list_slide').hasClass('mo') ) {
        if ( prdSwiper[index] !== undefined ) {
          prdSwiper[index].destroy(true, true);
        }

        prdSwiper[index] = new Swiper($(this).find('.prd_list_slide'), {
          centeredSlides: true,
          slidesPerColumn: 3,
          slidesPerView: 1,
          speed: 1000,
          preloadImages: true,
          lazy: {loadPrevNext: true},
          navigation: {
            nextEl: $(this).find('.main_slide_next'),
            prevEl: $(this).find('.main_slide_prev')
          },
          pagination: {
            el: $(this).find('.swiper-pagination'),
            clickable: true
          }
        });

        $(this).find('.prd_list_slide').addClass('mo').removeClass('pc');
      }
    });
  }

  var $prdBtn = $('.cdj_renew .main_prd_list .prd_tab_con .prd_list_box .prd_list_slide .prd_thumb .hover_icon .prd_btn');

  $prdBtn.on('click', function (){
    $(this).toggleClass('on');
  });



  /* 다다일상 정기구독 */
  var dadaSwiper = undefined;

  function initSwiper() {
    if ( $(".cdj_renew .dada_subs_slide").length > 0 ) {
      var ww = $(window).outerWidth();

      if (ww < 1024 && dadaSwiper == undefined) {
        dadaSwiper = new Swiper(".cdj_renew .dada_subs_slide", {
          slidesPerView: 1.2,
          spaceBetween: 12,
          simulateTouch: true,
          speed: 1000,
        });
      } else if (ww >= 1025 && dadaSwiper != undefined) {
        dadaSwiper.destroy();
        dadaSwiper = undefined;
      }
    }
  }

  initSwiper();

  $(window).on('resize', function () {
    initSwiper();
  });

  /* $(window).on('load', function (){
     if ( ww > 1025 ) {
       $dadaSwiperWrapper.addClass('on');
     }
   });*/




  /* 매거진 */
  var magazineSwiper = new Swiper(".magazine_slide", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 1000,
    /*    loop: true,
        autoplay: {
          delay: 3500,
        },*/
    breakpoints: {
      1024: {
        slidesPerView: 1.2,
        spaceBetween: 12
      },
    },
    navigation: {
      nextEl: ".magazine_list .main_slide_next",
      prevEl: ".magazine_list .main_slide_prev",
    },
    /*observer: true,
    observeParents: true,*/
  });






});

