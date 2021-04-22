// main-wrapper에서 할일
// 1. 배너가 자동으로 움직인다
// 2. 배너가 나타나면 그 후에 내부요소들이 animation으로 나타난다
// 3. 동영상은 플레이가 끝난 이후에 다음으로 넘어간다


/*************** 글로벌 설정 *****************/
var $mainWrapper = $('.main-wrapper')
var $mainSlide = $('.main-wrapper .slide')
var mainLen = $mainSlide.length
var mainLastIdx = mainLen - 1
var mainDepth = 2
var mainIdx = 0
var mainGap = 3000
var mainSpeed = 500
var mainInterval
initMain()


/*************** 사용자 함수 *****************/
function initMain() {
	$mainSlide.eq(mainIdx).css('z-index', mainDepth++)
	mainInterval = setInterval(onMainAni, mainGap)
}


/*************** 이벤트 등록 *****************/


/*************** 이벤트 콜백 *****************/
/* if(mainIdx == mainLastIdx) mainIdx = 0
else mainIdx = mainIdx + 1 */
function onMainAni() {
	mainIdx = (mainIdx == mainLastIdx) ? 0 : mainIdx + 1
	$mainSlide.eq(mainIdx).css('z-index', mainDepth++)
}
