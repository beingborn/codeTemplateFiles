
//공통 Accordion
$(document).ready(function() {

    $('.common_accordion_btn, .accordion_button').each(function(){
        if($(this).hasClass('on')){
            $(this).next().show();
        }
    })
    $('.common_accordion_btn, .accordion_button').on('click',function() {
        if ($(this).next().is(':hidden') == true) {
            $(this).addClass('on');
            $(this).next().slideDown();
        } else {
            $(this).removeClass('on');
            $(this).next().slideUp();
        }
    });

});


//button disable alert
$(document).ready(function() {
    $('.disabled button').each(function(){
        $(this).on('click',function(){
            alert('현재 예약이 불가능한 프로그램입니다.');
        });
    });
})

