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

/*************** 이벤트 등록 *****************/
$(window).scroll(onScroll).trigger('scroll')

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
	var noticeGap = 5
	/***** notice-wrapper 제어 *****/
	
}

function onShowNotice(e) {
	$('.notice-wrapper').find('.bt-show').hide()
	$('.notice-wrapper').find('.bt-hide').show()
	$('.notice-wrapper').find('.notice-content').show()
}

function onHideNotice(e) {
	$('.notice-wrapper').find('.bt-show').show()
	$('.notice-wrapper').find('.bt-hide').hide()
	$('.notice-wrapper').find('.notice-content').hide()
}

function onCloseNotice(e) {
	$('.notice-wrapper').hide()
}

function onHideTodayNotice(e) {
	$.cookie('hideNotice', 'Y', { expires: 1, path: '/' })
	onCloseNotice()
}

function onToggleLang(e) {
	$('.header-wrapper .link-lang .hover').toggle()
}

function onShowLang(e) {
	$('.header-wrapper .link-lang .hover').show()
}

function onHideLang(e) {
	$('.header-wrapper .link-lang .hover').hide()
}

function onChgLang(e) {
	var $span = $(this).parent().prev().find('span')
	var myLang = $(this).text()
	var spanLang = $span.text()
	$span.text(myLang)
	$(this).text(spanLang)
}

