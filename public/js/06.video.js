// console.log( $('.video') )
// console.log( $('.video')[0] )
// console.log( $($('.video')[0]) )
// console.log( $($('.video')[0])[0] )
// console.log( document.querySelector('.video') )
// console.log( document.querySelectorAll('.video')[0] )

/*************** 글로벌 설정 *****************/
var video = $('.video')[0]
var $btPlay = $('.bt-play')
var $btPause = $('.bt-pause')


/*************** 사용자 함수 *****************/
function isPlay(chk) {
	if(chk) {
		$btPlay.hide()
		$btPause.show()
	}
	else {
		$btPlay.show()
		$btPause.hide()
	}
}


/*************** 이벤트 등록 *****************/
$btPlay.click(onPlay).trigger('click')
$btPause.click(onPause)
video.addEventListener('ended', onEnded)


/*************** 이벤트 콜백 *****************/
function onPlay() {
	video.play()
	// video.currentTime = 10
	isPlay(true)
}

function onPause() {
	video.pause()
	isPlay(false)
}

function onEnded() {
	console.log('video 끝')
}





