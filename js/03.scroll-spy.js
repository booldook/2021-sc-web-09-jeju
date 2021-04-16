/* 
Scroll Spy
1. 선행학습: dimension
*/

/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$(window).scroll(onScroll)


/*************** 이벤트 콜백 *****************/
/* for(var i=0; i<$('.page').length; i++) {
	pageOffset[i] = $('.page').eq(i).offset().top
} */
function onScroll() {
	var windowHeight = $(this).innerHeight()
	var scrollTop = $(this).scrollTop()
	var pageOffset = []
	$('.page').each(function(i){
		pageOffset[i] = $(this).offset().top
	})
	
	// console.log('windowHeight:', windowHeight)
	// console.log('scrollTop:', scrollTop)
	// console.log('pageOffset:', pageOffset)

	if(scrollTop >= pageOffset[3]) {
		console.log('page4')
	}
	else if(scrollTop >= pageOffset[2]) {
		console.log('page3')
	}
	else if(scrollTop >= pageOffset[1]) {
		console.log('page2')
	}
	else {
		console.log('page1')
	}
}
