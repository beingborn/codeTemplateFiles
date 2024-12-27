/****************************************************
	파일명	: common.js
	최초작성자	: 이민혁
	최초작성일	: 2024-09-28
	-------------------------------------------------
	Dec. ui 핸들링, 공통 기능 구현 js
	-------------------------------------------------
	최종수정자	: 이민혁
	최종수정일	: 2024-09-28
	수정내용	: 최초작성
*****************************************************/

/**
 * 함수명 : openPop
 * 설명   : 다중 모달 open하기
 * param  : 
 */

// 팝업 열기
function openPop(modalname) {
	document.get
	$("." + modalname).addClass('is-open');
}
	
$(document).ready(function () {
// 팝업 닫기
	$(".ADpopup_wrap .close_btn").click(function() {
		$('.ADpopup_wrap').removeClass('is-open');
	});
});

/**
 * 함수명 : 
 * 설명   : 탭 콘텐츠 변경
 * param  : 이벤트 발생 요소
 */
var $this;
$(".openPopup").on("click", function(event) {
	$this = $(this);
	$("#popup").fadeIn(400).attr("tabindex", 0).show().focus();; 
	$("body").append('<div class="bgPopup"></div>');
	});
	$("#popup .close").on("click", function(event) { 
	$("#popup").fadeOut(400); 
	$(".bgPopup").fadeOut(400);
});

/**
 * 함수명 : 
 * 설명   : 탭 콘텐츠 변경
 * param  : 
 */
$('.tab__content .tab').hide().eq(0).show();
$('.tab__btn button').eq(0).addClass('active');
$(".tab__wrap .tab__btn button").click(function () {
	var idx = $(this).parent().index();
	$(".tab__content .tab").hide();
	$(".tab__content .tab").eq(idx).fadeIn();
	$(".tab__btn button").removeClass("active");
	$(this).addClass("active");
});

/**
 * 함수명 : 
 * 설명   : 제이쿼리 달력 
 * param  : 
 */
$.datepicker.setDefaults({
	prevText: "이전 달",
	nextText: "다음 달",
	closeText: '닫기',
	monthNames: ["1","2","3","4","5","6","7","8","9","10","11","12"],
	monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
	dayNames: ['S','M','T','W','T','F','S'],
	dayNamesShort: ['S','M','T','W','T','F','S'],
	//dayNamesMin: ['S','M','T','W','T','F','S'],
	dayNamesMin: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
	weekHeader: 'Wk',
	yearSuffix: '.',
	dateFormat: "yy-mm-dd",
	firstDay: 0,
	showMonthAfterYear: true,
	//showOtherMonths: true,
	showOn: "both",
	buttonImage: "../../../images/portal/v2/icon_calendar.png",
	buttonImageOnly: true,
	buttonText: "달력 선택",
	changeMonth : true,
	changeYear : true,
	yearRange : "c-100:c+5",
	isRTL: false
});
$(".datepicker1").datepicker();
$(".datepicker1").on('click', function(){
	$('.ui-datepicker').addClass('clickEvent');
})





