
$(function(){
    codeBoxSettings();

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
})



var markupNum = 0;
var jsNum = 0;
$(".file_lst tbody tr").each(function() {
    var text = $(this).find('td').eq(1).text();
    if (text.indexOf('markup') >= 0) {
        markupNum++;
    }
    if (text.indexOf('js') >= 0) {
        jsNum++;
    }

});

$('.count-info .markup strong').text(markupNum);
$('.count-info .js strong').text(jsNum);


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






