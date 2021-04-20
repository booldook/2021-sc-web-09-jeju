/*************** 글로벌 설정 *****************/
init()

/*************** 사용자 함수 *****************/
function init() {
	$('.header-wrapper').find('.notice-content').hide()
	$('.header-wrapper').find('.bt-hide').hide()
}

/*************** 이벤트 등록 *****************/
$('.header-wrapper .bt-show').click(onNoticeShow)
$('.header-wrapper .bt-hide').click(onNoticeHide)
$('.header-wrapper .bt-close').click(onNoticeClose)


/*************** 이벤트 콜백 *****************/
function onNoticeShow() {
	$('.header-wrapper').find('.bt-show').hide()
	$('.header-wrapper').find('.bt-hide').show()
	$('.header-wrapper').find('.notice-content').show()
}

function onNoticeHide() {
	$('.header-wrapper').find('.bt-show').show()
	$('.header-wrapper').find('.bt-hide').hide()
	$('.header-wrapper').find('.notice-content').hide()
}

function onNoticeClose() {
	$('.header-wrapper').find('.notice-wrapper').hide()
}

