// footer script
var footBtn = $('.footer-quick-btn');
var footNav = $('.footer-twodepth');
$(footNav).hide();
$(footBtn).click(function(){
	if(!($(this).hasClass('open'))) {
		$(this).addClass('open');
		$(this).next().slideDown();
	} else {
		$(this).removeClass('open');
		$(this).next().slideUp();
	}
});