/*************** 글로벌 설정 *****************/
// var interval = setInterval(onShuffle, 4000)
var justifyContent = ['space-between', 'space-around', 'space-evenly', 'flex-start', 'flex-end', 'center']


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('.bt-grow').click(onGrow)


/*************** 이벤트 콜백 *****************/
function onShuffle() {
	// $('.box-wrapper1 > .box')
	// $('.box-wrapper1').children('.box')
	$('.box-wrapper1').find('.box').each(function(i) {
		var order = Math.floor(Math.random() * 5) + 1
		$(this).css('order', order)
	})

	var n = Math.floor(Math.random() * 6)
	$('.box-wrapper1').css('justify-content', justifyContent[n])
}

function onGrow() {
	var $box = $('.box-wrapper2').children('.box')
	var n = Math.floor(Math.random() * $box.length)
	$box.css('flex-grow', 0)
	$box.eq(n).css('flex-grow', 1)
}
