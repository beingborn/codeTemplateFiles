/* 스크롤 이벤트 감지해서 헤더 고정 or 숨기기 */
$(document).ready(function () {
  let lastScrollTop = 0;

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let headerHeight = $(".header").outerHeight();

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      $(".header").removeClass("header__fixed"); 
    } else if (scrollTop < lastScrollTop || scrollTop <= headerHeight) {
      $(".header").addClass("header__fixed");  // 스크롤을 올릴 때 헤더를 고정
    }
    if (scrollTop <= headerHeight) {
      // 단 스크롤 높이 값이 headerHeight값보다 작아진다면 relative로 다시 전환하기 (최상단 애니메이션 막기)
      $(".header").removeClass("header__fixed");
    }
    lastScrollTop = scrollTop;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤이 0일 때 음수로 가지 않게 함
  });
});

/** 헤더 영역 토글 함수 active 값에 따라 펼치기 */
$(document).ready(function () {
  const gnbTop__Menu = $("#gnb1 > .top__menu > li.plus > a");
  const gnbSub__Menu = $("#gnb1 .sub__menu > ul > li > a");
  let gnbOpenMenu;
  gnbTop__Menu.click(function () {
    gnbOpenMenu = $(this).parent();
    const isItOpen = gnbOpenMenu.hasClass("active");
    if (isItOpen) {
      gnbOpenMenu.removeClass("active");
      $(".gnb__bg").hide();
    } else {
      gnbTop__Menu.parent().removeClass("active");
      gnbSub__Menu.parent().removeClass("active");
      gnbOpenMenu.addClass("active");
      $(".gnb__bg").show();
    }
    const firstSub__MenuItem = gnbOpenMenu.find(
      ".sub__menu ul li:first-child a"
    );
    if (firstSub__MenuItem.length > 0) {
      gnbOpenMenu.siblings().find(".sub__menu ul li").removeClass("active");
      firstSub__MenuItem.parent().addClass("active");
    }
  });
  gnbSub__Menu.click(function () {
    const gnbOpenSub__Menu = $(this).parent();
    gnbSub__Menu.parent().removeClass("active");
    gnbOpenSub__Menu.addClass("active");
  });
  $(".gnb__bg").click(function () {
    gnbOpenMenu.removeClass("active");
    $(this).hide();
  });
});

// 라디오 버튼 클릭 시 clicked 클래스 추가 (클릭 시 notchecked 스타일 변경)
const radioAgree = $('input[type="radio"]')
radioAgree.click(function() {
  radioAgree.addClass('clicked');
});

/* 웹 탭 변환 Open Tab web */
$('.tab__content .tab').hide().eq(0).show();
$('.tab__btn button').eq(0).addClass('active');
$(".tab__wrap .tab__btn button").click(function () {
  var idx = $(this).parent().index();
  $(".tab__content .tab").hide();
  $(".tab__content .tab").eq(idx).fadeIn();
  $(".tab__btn button").removeClass("active");
  $(this).addClass("active");
});

/* 모바일 탭 변환 mobile Tab */
$(".mobile__tab .swiper-slide button").eq(0).addClass('active');
$(".mobile__tab .swiper-slide button").click(function(){
  var idx = $(this).parent().index()
  $(".tab__content .tab").hide();
  $(".tab__content .tab").eq(idx).fadeIn();
  $(".mobile__tab .swiper-slide button").removeClass("active")
  $(this).addClass("active")
})

// 모바일 클릭 GNB 이벤트
let submenuUl = $('.submenu__wrap .submenu');
submenuUl.hide().eq(0).show();
$("#gnb2 .menu__wrap a").eq(0).addClass("active");
  $("#gnb2 .menu__wrap a").click(function (event) {
    event.preventDefault();
    var idx = $(this).parent().index()
    submenuUl.hide().eq(idx).fadeIn();
    $("#gnb2 .menu__wrap a").removeClass("active");
    $(this).addClass("active");
  });

// 모달 닫기 이벤트 핸들러
$(".modal__close button").click(function () {
  $(".modal, .modal__bg").hide(); // 모든 모달 요소를 숨김
});

/** 메뉴 클릭 시 gnb2 메뉴 토글 */
$(".hamburger").on("click", function () {
  $("#gnb2").addClass("active");
  $("body").css("overflow", "hidden");
});

$(".gnb__close").click(function () {
  $("#gnb2").removeClass("active");
  $("body").css("overflow", "");
});

// 메뉴 권한 애니메이션 높이 제어
$(document).ready(function () {
  let menuList = $(".menu-wrap");
  let menuHeight = menuList.innerHeight();
  menuList.css("height", menuHeight);
});

// 테이블 클릭 이벤트  
$('table.click tr').click(function(){
  $('table.click tr').removeClass('on');
  $(this).addClass("on")
})

// 테이블 페이지 네이션 전환
$(document).ready(function () {
  let tablePagination = $(".pagination .page-link");
  tablePagination.click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    tablePagination.not($(this)).removeClass("active");
  });
  tablePagination.eq(0).addClass("active");
});

// 모달 open
$(document).ready(function () {
  setModalWidth();
  $("[data-target]").click(function () {
    const targetModal = $(this).data("target");
    setModalWidth(targetModal);
    $(targetModal).show();
    $(".modal__bg").show();
  });
  $(".modal__close button").click(function () {
    $(".modal, .modal__bg").hide();
  });
  $(".modal__hide").click(function () {
    const targetModal = $(this).closest(".modal");

    targetModal.hide();
    $(".modal__bg").hide();
  });
  // 모달의 너비를 부모 요소에 맞게 설정하는 함수
  function setModalWidth(targetModal) {
    const modalWidth = $(".main__inner").innerWidth() - 20;
    $(targetModal).css("width", modalWidth);
  }
  $(".modal__bg").hide();
});

// 도움말 버튼 클릭 시 창 팝업
$(".info__tip").on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("active");
  $(this).next(".tooltip__layer").toggleClass("active");
});
$(".tooltip__layer .info__close__btn").on("click", function (e) {
  e.stopPropagation();
  $(this).closest(".tooltip__layer").removeClass("active");
  $(this).closest(".tooltip__layer").prev(".info__tip").removeClass("active");
});

// 업로드 임시 이벤트 제거
$(".btn__upload").click(function (e) {
  e.preventDefault();
});

// 비밀번호 숨기기 보이기 코드, 버튼 클릭 시. text 박스로 변경
$(document).ready(function(){                      
$('.secret__Check').each(function(){
      const pwInput = $(this).find('.password__input')
      const showButton = $(this).find('.icon__pw-visible')
      const showIcon = $(this).find('.show__icon')
      showButton.on('click', function() {
      const type = pwInput.attr('type') === 'password' ? 'text' : 'password';
      pwInput.attr('type', type);
      const iconSrc = type === 'password' ? 'img/icon__see.svg' : 'img/icon__see-visible.svg';
      showIcon.attr('src', iconSrc);
    });
  })   
})

// 노동조합 규약명 추가 및 삭제 함수
$(document).ready(function () {
  $(".form__body").on("click", ".btn__add", function () {
    const template = document.getElementById("row-template");
    const newRow = template.content.cloneNode(true);
    const fileIndex = `file_${Date.now()}`;
    const newFileInput = newRow.querySelector(".file__post");
    newFileInput.id = `profile_pics${fileIndex}`;
    newRow.querySelector(".btn__file__select").setAttribute("for", `profile_pics${fileIndex}`);
    newRow.querySelector(".btn__file__select--mo").setAttribute("for", `profile_pics${fileIndex}`);
    $(".form__body").append(newRow); // 새로운 행 추가
    });

    $(".form__body").on("click", ".btn__remove", function () {
    $(this).closest(".form__row").remove();
    });
    });

  // 파일명 함수
  $(document).ready(function () {
    let preview = $(".preview");
    function displayFileNames(event) {
    let currentInput = $(event.target);
    let previewBox = currentInput.siblings(".preview");
    previewBox.empty();
    const currentFile = currentInput[0].files;
    if (currentFile.length === 0) {
    const para = $("<span>").text("아무 파일도 입력되지 않았어요");
    previewBox.append(para);
    } else {
    const fileList = $("<div>");
    previewBox.append(fileList);
    for (const file of currentFile) {
    const listItem = $("<p>").text(file.name).addClass("upload__file__name");
    fileList.append(listItem);
    }
    }
    }
      
    $(document).on('change', '.file__post', displayFileNames)
    });


/** 모바일 슬라이드 토글 */
let dataOpen = $(".data--open");
$(document).ready(function () {
  dataOpen.click(function () {
    var currentSlide = $(this).next(".mo__slide");
    $(this).next(".mo__slide").slideToggle();
    $(this).toggleClass("on").siblings().removeClass("on");
    dataOpen.not($(this)).removeClass('on');
    $(".mo__slide").not(currentSlide).slideUp();
  });
  $(".mo__slide").slideUp();
});

/* Modal */
var $this;
$(".openPopup").on("click", function(event) {
  $this = $(this);
  $("#popup").fadeIn(400).attr("tabindex", 0).show().focus();; 
  $("body").append('<div class="bgPopup"></div>');
});

$("#popup .close").on("click", function(event) { 
  $("#popup").fadeOut(400); 
  $(".bgPopup").fadeOut(400);
  // $this.siblings("input, a, button").focus();
});

/* 출력물 조회 */
var $printThis
$(".openPrint").on('click', function(){
  $printThis = $(this);
  window.open('print.html', '_blank')
})


// 레이어 팝업 (제외동포청)
function fn_layer(e,t,s) {
	var pdt = $('#'+e).find('> .inner').css('padding-top').replace(/[^-\d\.]/g, ''),
		pdb = $('#'+e).find('> .inner').css('padding-bottom').replace(/[^-\d\.]/g, '');

	$('*:focus').addClass(e);
	$('#'+e).fadeIn(200).addClass('on');
	$('body, html').css({'overflow':'hidden'});
	$('#'+e).find('> .inner .cont').attr("tabindex",0).focus();
	$(window).resize(function(){
		$('#'+e).find('> .inner').css({'width':s+'px'});
		$('#'+e).find('.cont').css({'max-height':$('#'+e).height()*0.9 - (Number(pdt) + Number(pdb))});

		// 로그인 팝업
		if($(".loginWrap").length){
			var pdtC = $('#'+e).find('.cont').css('padding-top').replace(/[^-\d\.]/g, ''),
				pdbC = $('#'+e).find('.cont').css('padding-bottom').replace(/[^-\d\.]/g, '');
				titH = $('#'+e).find('.tit').outerHeight(),
				tabH = $('#'+e).find('.tab').outerHeight();
			$(".loginWrap").css({'max-height':$('#'+e).height()*0.9 - (Number(pdt) + Number(pdb) + Number(pdtC) + Number(pdbC) + Number(titH) + Number(tabH))});
		}
		//-- 로그인 팝업
	}).resize();
//	$('#'+e).find('> .inner> a').focusout(function(){
//		$('#'+e).find('> .inner .cont').attr("tabindex",0).focus();
//	});
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