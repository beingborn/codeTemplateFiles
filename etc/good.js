// document ready
// 초기화로 이벤트 등록 후 
// 해당 요소를 클릭 시 함수 실행하는 구조

$(function(){
    moGnb.init();
})

const moGnb = {
    openNav : function()  {
        $('#mo-gnb').addClass('is-active')
    },
    init : function()  {
        $('.sm-toggler').on('click', ()=>{
            this.openNav()
        })
    },
}

const tab = {
    tab : $('tab'),

    init : () => {
        this.tab
    }
}


//nav
var nav = {
	gnbScrollTop: 0,
	delta: 50,
	unMob: 960,

	openNav: function () {
		$('body').addClass("opened-nav");
	},

	//closeNav
	closeNav: function () {
		$('body').removeClass("opened-nav");
	},

	//init
	init: function () {
		var windowWidth = window.innerWidth;
    }
}


// 한 요소에 객체 느낌으로 여러 개 작성하기
$('.nav_menu > li > h2 > a').on({
    mouseenter: function (e) {
        var target = e.target;
        $(target).parents('.nav_menu').find('.nav_overMenu').slideDown(function () {
            $('.nav').addClass('active');
        });
    },
    click: function (e) {
        var target = e.target;
        if (!$('.nav').hasClass('active')) {
            $(this).trigger('mouseenter');
        } else {
            $('.nav').trigger('mouseleave');
        }
    }
});

const link = {
    link: $("a"),

    init: function() {
        this.link.each(function(index, item) {
            if ($(item).attr('target') === "_blank") {
                $(item).attr('title', '새 창 열기');
            }
        });
    }
}

link.init();


// 개발자 모드 차단
(function() {
    // 우클릭, 드래그, 복사 차단
    var events = [ "contextmenu", "selectstart", "dragstart"];

    events.forEach(function(event) {
        window.addEventListener(event, blockEvent, true);
    })

    function blockEvent(e) {
        e.preventDefault();
    }
    //=================================================================================
    // 개발자 메뉴 (F12) 차단
    //=================================================================================
    window.addEventListener('keydown', blockDeveloperMenu, true);

    function blockDeveloperMenu(e) {
        if (e.keyCode === 123) { // F12
            blockEvent(e);
        }
        if (e.ctrlKey && e.shiftKey) {
            var code = e.keyCode;
            // 개발자 도구를 여는 Ctrl + Shift + 키 조합
            if (code === 67 || code === 69 || code === 73 || code === 74
                    || code === 75 || code === 77 || code === 83) {
                blockEvent(e);
            }
        }
    }

    setInterval(function() {
        debugger;
    }, 200);
})


// 키보드 접근성을 고려한 jquery, 키보드를 통해 활성화를 해도 됌
nav.on('focusin mouseenter', function(e){
 nav.addClass('is-open')   
})

// Top 버튼 이동
$('.top-btn').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop : 0
    }, 700)
})

// window load , resize 한번에 처리]
$(window).on('load resize', function() {
    var width = $(window).width();

    if (width < 1280) {
        $('.ele').hide();
        $('.ele').removeAttr("href");
    } else {
        $('.ele').show();
    }
});




// tabindex="0"
// 키보드 초점을 받을 수 없는 div, span과 같은 요소도 초점을 
// 받을 수 있도록 만들어 줍니다. 초점을 받되 초점을 받는 순서는 자연스러운 마크업 순서를 따릅니다.
$('ele').click(function(){
    $('ele').attr("tabindex", "0")
})

$('eleClose').click(function(){
    $('ele').removeAttr("tabindex")
})


// 1. 전달받은 value값을 저장
// 2. 반복문 => 각각 메뉴의 item text를 저장
// 3. 값이 있는게 있는지 includes를 통해 확인
// 4. 값이 있다면, 전역 변수 hasResult true 
// 5. 그리곤 목록에 해당 아이템 들을 전달, 추가한다.
// 6. 해당 목록을 최상위 부모 레이어에 추가한다.
// 7. 없을 경우엔 검색어가 없다는 text를 추가한다.

// KRDS 검색 실행
const performSearch = () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    const resultList = document.createElement("ul");
    resultList.classList.add("result-list");

    searchResultsLayer.innerHTML = "";

    if (!searchValue) {
        searchResultsLayer.innerHTML = `<div class="no-results">검색어를 입력하세요.</div>`;
        return;
    }

    let hasResults = false;

    menuItems.forEach((item) => {
        const itemText = item.textContent.trim().toLowerCase();
        if (itemText.includes(searchValue)) {
        hasResults = true;
        resultList.appendChild(createSearchResultItem(item, searchValue));
        }
    });

    if (hasResults) {
        searchResultsLayer.appendChild(resultList);
    } else {
        searchResultsLayer.innerHTML = `<div class="no-results"><strong>'${searchValue}'</strong> 에 대한 검색 결과가 없습니다.</div>`;
    }
    };

    // 검색 리셋
    const reset = () => {
    searchInput.value = "";
    searchResultsLayer.innerHTML = "";
    };
  
