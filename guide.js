document.addEventListener('DOMContentLoaded', function(){
        
    // code 클립보드 복사 기능
    $('.copy-btn').click(function(){ 
        if ($(this).text() == 'copied' ){
            $(this).text('copy') 
        } else {
            var copyText = $(this).siblings('.code').text()
            var tempEl = document.createElement("textarea")
            document.body.appendChild(tempEl);
            tempEl.value = copyText;
            tempEl.select();
            tempEl.setSelectionRange(0,9999);
            document.execCommand("copy");
            tempEl.setSelectionRange(0,0);
            document.body.removeChild(tempEl)
            $(this).text('copied!')
        }
    })

    // 파일 개수 참조
    var markupNum = 0;
    var jsNum = 0;
    var fileNum = 0;
    $(".file_lst tbody tr").each(function() {
        var text = $(this).find('td').eq(1).text();
        if (text.indexOf('markup') >= 0) {
            markupNum++;
        }
        if (text.indexOf('js') >= 0) {
            jsNum++;
        }
        if (text.indexOf('file') >= 0){
            fileNum++;
        }
    });

    $('.count-info .markup strong').text(markupNum);
    $('.count-info .js strong').text(jsNum);
    $('.count-info .file strong').text(fileNum);
    
    // Prism 코드박스 스타일
    function codeBoxSettings(){
        if( $(".code-box-group").length > 0){
            var htmlContent = $("body")
            .clone()
            .find("script, style, link, .code-box-group")
            .remove()
            .end()
            .prop("outerHTML")
        
            htmlContent = htmlContent.replace(/<body[^>]*>/g, '').replace(/<\/body>/g, '');
            $(".html-code-box .html-content").text(htmlContent).addClass("language-html")
        
            if($("style").length == 0 ){
                var emptyCSS = "스타일시트가 존재하지 않습니다."
                $(".css-code-box .css-content").text(emptyCSS)
            } else {
                var cssContent = $("style").prop("outerHTML")
                cssContent = cssContent.replace(/<style[^>]*>/g, '').replace(/<\/style>/g, '');
                $(".css-code-box .css-content").text(cssContent).addClass("language-css")
            }
            if($("body script.script").length == 0) {
                var emptySCRIPT = "스크립트가 존재하지 않습니다."
                $(".script-code-box .js-content").text(emptySCRIPT)
            } else {
                var jsContent = $("body script.script").prop("outerHTML")
                jsContent = jsContent.replace(/<script class="script"[^>]*>/g, '').replace(/<\/script>/g, '');
                $(".script-code-box .js-content").text(jsContent).addClass("language-javascript")
            }
            Prism.highlightAll()
        }
    }

    codeBoxSettings();

    // 사이드 바 기능
    $('.sidebar-item > a').click(function(){
        $('.sidebar-item').removeClass("is-active")
        $(this).parent().addClass("is-active")
    })

    // 검색 버튼 기능
    $('.file_lst_search .btn-function').click(function () {
        $('.file_lst_search .btn-function').not($(this)).removeClass('is-active')
        $(this).addClass('is-active');
    })
    
    // URL 마지막 요소 추출
    const URL = (window.location.href).split('/').reverse()[0];

    if (URL.includes('index')){
        const fastModeBtn = document.querySelector('#fastModeBtn')
        const slowModeBtn = document.querySelector('#slowModeBtn')
    
        let filterValue;
        let searchTbody;
        let rows;
        let searchMode = "slowmode"; // 기본값을 패스트 모드로 설정
    
        if (searchMode = "fastmode"){
            // searchBtn.disabled = true;
        } else {
            // searchBtn.disabled = false;
        }
    
        const searchInput = document.querySelector('#search')
        searchTbody = document.querySelector('.file_lst tbody');
    
        searchInput.addEventListener('keyup', function(){
            filterValue = searchInput.value;
        })
    
        // 검색 버튼 기능
        const searchBtn = document.querySelector('#search-confirm')
        searchBtn.addEventListener('click',function(event){
            event.preventDefault();
            const pageNameRows = searchTbody.querySelectorAll('tr');
            let matched = false;
    
            for (var i = 0; i < pageNameRows.length; i++){
                
                var pageNumText = pageNameRows[i].textContent;
                // 각각의 tr의 text컨텐츠의 filterValue가 포함되어있다면, tr의 display값을 'block'
                if(pageNumText.includes(filterValue)){
                pageNameRows[i].style.display = '';
                matched = true;
                } else {
                pageNameRows[i].style.display = 'none';
                }
            } 
            // 검색어가 없을 경우
            if (matched === false) {
                const noDataTr = document.createElement('tr')
                const noDataTd = document.createElement('td')
                noDataTd.textContent = "조회된 데이터가 없습니다."
                noDataTd.setAttribute('colspan', '6')
                noDataTd.setAttribute('style', 'text-align: center;')
                noDataTr.appendChild(noDataTd);
                searchTbody.appendChild(noDataTr)
                return false;
            }
        })
    }
    
})







