/*************** 글로벌 설정 *****************/
initCommon()

/*************** 사용자 함수 *****************/
function initCommon() {
	if($.cookie('hideNotice') === 'Y') onCloseNotice()
	else {
		$('.header-wrapper').find('.notice-content').hide()
		$('.header-wrapper').find('.bt-hide').hide()
	}
}

/*************** 이벤트 등록 *****************/
$('.header-wrapper .bt-show').click(onShowNotice)
$('.header-wrapper .bt-hide').click(onHideNotice)
$('.header-wrapper .bt-close').click(onCloseNotice)
$('.header-wrapper .bt-today').click(onHideTodayNotice)
$('.header-wrapper .link-lang').click(onToggleLang)
$('.header-wrapper .link-lang').mouseenter(onShowLang)
$('.header-wrapper .link-lang').mouseleave(onHideLang)
$('.header-wrapper .link-lang .lang').click(onChgLang)


/*************** 이벤트 콜백 *****************/
function onShowNotice() {
	$('.header-wrapper').find('.bt-show').hide()
	$('.header-wrapper').find('.bt-hide').show()
	$('.header-wrapper').find('.notice-content').show()
}

function onHideNotice() {
	$('.header-wrapper').find('.bt-show').show()
	$('.header-wrapper').find('.bt-hide').hide()
	$('.header-wrapper').find('.notice-content').hide()
}

function onCloseNotice() {
	$('.header-wrapper').find('.notice-wrapper').hide()
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

