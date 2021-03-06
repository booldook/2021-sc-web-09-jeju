/*************** 글로벌 설정 *****************/
init()

/*************** 사용자 함수 *****************/
function init() {
	if($.cookie('modalDeny') !== 'Y') setTimeout(onModalShow, 2000)
}

/*************** 이벤트 등록 *****************/
$('.bt-close').click(onModalHide)
$('.bt-open').click(onModalShow)
$('.bt-day').click(onModalDay)


/*************** 이벤트 콜백 *****************/
function onModalDay() {
	$.cookie('modalDeny', 'Y', { expires: 1, path: '/' })
	onModalHide()
}

function onModalShow() {
	$('.modal-wrapper').show()
	$('.modal-wrapper').css('background-color')
	$('.modal-wrapper').css('background-color', 'rgba(0, 0, 0, 0.8)')
	$('.modal-wrapper .modal-wrap').css('transform')
	$('.modal-wrapper .modal-wrap').css('transform', 'translate(-50%, -50%)')
}

function onModalHide() {
	$('.modal-wrapper').attr('style', '')
	$('.modal-wrapper .modal-wrap').attr('style', '')
}
