$(document).ready(function(){

    var swiper = new Swiper(".slide1", {
       slidesPerView: 1,
       spaceBetween: 30,
       loop: true,
       pagination: {
         el: ".paging",
         clickable: true,
       },
       navigation: {
         nextEl: ".slide1 .next",
         prevEl: ".slide1 .prev",
       },
     });

  var swiper2 = new Swiper('.slide2', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slide2 .next',
      prevEl: '.slide2 .prev',
    },
  });

  var swiper3 = new Swiper('.slide3', {
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    }
  });

});
