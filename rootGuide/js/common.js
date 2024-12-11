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
 * 함수명 : 
 * 설명   : 스크롤 올릴 때 헤더 상단 고정
 * param  : 
 */

let lastScrollTop = 0;
$(window).scroll(function () {
	let scrollTop = $(this).scrollTop();
	let headerHeight = $(".ly-header").outerHeight();

	if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
	$(".ly-header").removeClass("is-fixed"); 
	} else if (scrollTop < lastScrollTop || scrollTop <= headerHeight) {
	$(".ly-header").addClass("is-fixed");  // 스크롤을 올릴 때 헤더를 고정
	}
	if (scrollTop <= headerHeight) {
		$(".ly-header").removeClass("is-fixed"); // 단 스크롤 높이 값이 header의 Height값보다 작아진다면 relative로 다시 전환하기 (최상단 애니메이션 막기)
	}
	lastScrollTop = scrollTop;
	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤이 0일 때 음수로 가지 않게 함
});


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
 * 설명   : 제이쿼리 달력 출력
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

/**
 * 함수명 : 
 * 설명   : gnb open
 * param  : 
 */
let $btn = $('.header-btn')   
$('.header-btn').click(function(){
	// 클릭 시 해당 parent()에 is-active 클래스 추가, 다시 클릭 시 해제
	gnbBgOpen(true)
})

/**
 * 함수명 : gnbBgOpen
 * 설명   : gnb 오픈 여부에 따라 배경 추가 및 삭제
 * param  : 오픈 값
 */
function gnbBgOpen(isOpen){
	console.log(isOpen)
	if(isOpen){
		$('body').append('<div class="gnb-backdrop"></div>')
	} else {
		$('.gnb-backdrop').remove();
	}
}

/**
 * 함수명 : 
 * 설명   : gnb 배경 클릭 시 gnb 비활성화 및 배경 비활성화
 * param  : 
 */
$('body').on("click", '.gnb-backdrop', function() { 
	$(this).hide();
});


/**
 * 함수명 : fn_layer
 * 설명   : 다중 레이어 팝업 관리
 * param  : 
 */

// 레이어 팝업 (제외동포청)
function fn_layer(e,t,s) {
var pdt = $('#'+e).find('> .inner').css('padding-top').replace(/[^-\d\.]/g, ''),
	pdb = $('#'+e).find('> .inner').css('padding-bottom').replace(/[^-\d\.]/g, '');
$('*:focus').addClass(e);
$('#'+e).fadeIn(200).addClass('on');
$('body, html').css({'overflow':'hidden'});
$('#'+e).find('> .inner .cont').attr("tabindex",0).focus();
}

// 레이어 팝업 닫기
function fn_layer_close(t){
	var backFocus = $(t).closest(".layerPop").attr("id");
	console.log(backFocus)
	$(t).closest(".inner").parent().fadeOut(200).removeClass("on");
	$("body, html").css({"overflow":"auto"});
	setTimeout(function(){
		$("." + backFocus).focus().removeClass(backFocus);
	},200)
}


/**
 * 함수명 : 
 * 설명   : 커스텀 list 토글 클래스 부착, (화살표 백그라운드 변경 등에 사용)
 * param  : 
 */
$('.el-toggle-open').on('click',function(){
	$(this).parent().toggleClass('is-open')
	$(this).toggleClass('is-open')

	if($(this).parent()=== $('.bl-select')){
		overflowAutoAfterCheck()
	}
})









