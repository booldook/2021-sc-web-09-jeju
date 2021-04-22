// main-wrapper에서 할일
// 1. 배너가 자동으로 움직인다
// 2. 동영상은 플레이가 끝난 이후에 다음으로 넘어간다
// 3. 배너가 나타나면 그 후에 내부요소들이 animation으로 나타난다

	/* if(idx == lastIdx) mainIdx = 0
	else idx = idx + 1 */

/*************** main-wrapper *****************/
$(function() {

	/*************** 글로벌 설정 *****************/
	var $wrapper = $('.main-wrapper')
	var $slide = $('.main-wrapper .slide')
	var video = $('.main-wrapper .video')[0]
	var len = $slide.length
	var lastIdx = len - 1
	var depth = 2
	var idx = 0
	var gap = 3000
	var speed = 500
	init()
	
	
	/*************** 사용자 함수 *****************/
	function init() {
		$slide.eq(idx).css('z-index', depth++)
		onAni()
	}


	/*************** 이벤트 등록 *****************/
	video.addEventListener('loadeddata', onLoadedVideo)
	video.addEventListener('ended', onPlay)

	/*************** 이벤트 콜백 *****************/
	function onLoadedVideo() {
		if(video.readyState >= 2) {
			video.playbackRate = 4.0
		}
	}
	
	function onAni() {
		$(this).addClass('active')
		video.currentTime = 0
		if($slide.eq(idx).hasClass('is-video')) video.play()
		else setTimeout(onPlay, gap)
	}

	function onPlay() {
		idx = (idx == lastIdx) ? 0 : idx + 1
		$slide.eq(idx).css({'z-index': depth++, 'left': '100%'})
		$slide.removeClass('active')
		$slide.eq(idx).stop().animate({'left': 0}, speed, onAni)
	}

})