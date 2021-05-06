$('.slide-wrapper').slick({
	// variableWidth: true, // 슬라이드의 크기가 다를경우
	// adaptiveHeight: true // 슬라이드의 높이가 제각각일 경우
	centerMode: true, // 슬라이드의 선택된 슬라이드가 중앙으로 배치
	centerPadding: '10%', // 잘 안됨 확인필요!
	// fade: true, // fade mode
	// vertical: true, // vertical mode
	// verticalSwiping: true, // vertical mode에서 touch 지원여부
	// cssEase: 'linear', // animation easing
	focusOnSelect: true,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnDotsHover: true,
	infinite: true,
	// edgeFriction: 0.1, // infinite: false 일 때 마지막에 도착했을때 0에 가까울수록 적게움직임
	swipeToSlide: true,  // mobile에서 손가락으로 강제이동
	touchThreshold: 10,  // touch의 민감도 숫자가 높을수록 조금만 터치해도 움직인다
	arrows: true,
	dots: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
});