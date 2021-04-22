// main-wrapper에서 할일
// 1. 배너가 자동으로 움직인다
// 2. 배너가 나타나면 그 후에 내부요소들이 animation으로 나타난다
// 3. 동영상은 플레이가 끝난 이후에 다음으로 넘어간다



/*************** main-wrapper *****************/
$(function() {

	/*************** 글로벌 설정 *****************/
	var $wrapper = $('.main-wrapper')
	var $slide = $('.main-wrapper .slide')
	var len = $slide.length
	var lastIdx = len - 1
	var depth = 2
	var idx = 0
	var gap = 3000
	var speed = 500
	var interval
	init()


	/*************** 사용자 함수 *****************/
	function init() {
		$slide.eq(idx).css('z-index', depth++)
		interval = setInterval(onAni, gap)
	}


	/*************** 이벤트 등록 *****************/


	/*************** 이벤트 콜백 *****************/
	/* if(idx == lastIdx) mainIdx = 0
	else idx = idx + 1 */
	function onAni() {
		idx = (idx == lastIdx) ? 0 : idx + 1
		$slide.eq(idx).css('z-index', depth++)
	}

})