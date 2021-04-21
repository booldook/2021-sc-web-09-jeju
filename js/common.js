/*************** 글로벌 설정 *****************/
initCommon()

/*************** 사용자 함수 *****************/
function initCommon() {
	if($.cookie('hideNotice') === 'Y') onCloseNotice()
	else {
		$('.notice-wrapper').find('.notice-content').hide()
		$('.notice-wrapper').find('.bt-hide').hide()
	}
}

function scrollNotice(scTop) {
	var headerHeight = $('.header-wrapper').outerHeight()
	var noticeHeight = $('.notice-wrapper').outerHeight()
	var linkHeight = $('.link-wrapper').outerHeight()
	console.log(scTop)
	if(scTop == 0) {
		$('.notice-wrapper').show()
		$('.link-wrapper').show()
		$('.header-wrapper').css('top', 'unset')
	}
	else if(scTop > 0 && scTop < 200) {
		$('.notice-wrapper').hide()
		$('.link-wrapper').hide()
		$('.header-wrapper').css({'position': 'fixed', 'top': 0})
	}
	else {
		$('.header-wrapper').css('top', -headerHeight+'px')
		setTimeout(function(){
			$('.header-wrapper').css('top', 0)
		}, 50)
	}
}

function scrollHeader(scTop) {
	var linkHeight = $('.link-wrapper').outerHeight()
	if(scTop > 150) {
		//$('.header-wrapper').css({'position': 'fixed' , 'top': 0})
	}
	else {

	}
	/*
	var headerHeight = $('.header-wrapper').outerHeight()
	console.log(scTop, headerHeight)
	if(headerHeight < scTop) {
		$('.link-wrapper').hide()
		$('.header-wrapper').stop().animate({'top': 0}, 200, function(){
			$('.header-wrapper').css({'position': 'fixed', 'top': 0})
		})
	}
	else {
		console.log('원위치')
		//$('.header-wrapper').css({'position': 'absolute', 'top': 'unset'})
	}
	*/
}


/*************** 이벤트 등록 *****************/
$(window).scroll(onScroll)

$('.notice-wrapper .bt-show').click(onShowNotice)
$('.notice-wrapper .bt-hide').click(onHideNotice)
$('.notice-wrapper .bt-close').click(onCloseNotice)
$('.notice-wrapper .bt-today').click(onHideTodayNotice)

$('.header-wrapper .link-lang').click(onToggleLang)
$('.header-wrapper .link-lang').mouseenter(onShowLang)
$('.header-wrapper .link-lang').mouseleave(onHideLang)
$('.header-wrapper .link-lang .lang').click(onChgLang)


/*************** 이벤트 콜백 *****************/
function onScroll(e) {
	var scTop = $(this).scrollTop()
	scrollNotice(scTop)
	scrollHeader(scTop)
}

function onShowNotice() {
	$('.notice-wrapper').find('.bt-show').hide()
	$('.notice-wrapper').find('.bt-hide').show()
	$('.notice-wrapper').find('.notice-content').show()
}

function onHideNotice() {
	$('.notice-wrapper').find('.bt-show').show()
	$('.notice-wrapper').find('.bt-hide').hide()
	$('.notice-wrapper').find('.notice-content').hide()
}

function onCloseNotice() {
	$('.notice-wrapper').hide()
}

function onHideTodayNotice() {
	$.cookie('hideNotice', 'Y', { expires: 1, path: '/' })
	onCloseNotice()
}

function onToggleLang() {
	$('.header-wrapper .link-lang .hover').toggle()
}

function onShowLang() {
	$('.header-wrapper .link-lang .hover').show()
}

function onHideLang() {
	$('.header-wrapper .link-lang .hover').hide()
}

function onChgLang() {
	var $span = $(this).parent().prev().find('span')
	var myLang = $(this).text()
	var spanLang = $span.text()
	$span.text(myLang)
	$(this).text(spanLang)
}

