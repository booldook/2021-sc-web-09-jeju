// main-wrapper에서 할일
// 1. 배너가 자동으로 움직인다
// 2. 동영상은 플레이가 끝난 이후에 다음으로 넘어간다
// 3. 배너가 나타나면 그 후에 내부요소들이 animation으로 나타난다

/* if(idx == lastIdx) mainIdx = 0
else idx = idx + 1 */

/* for(var i=0; i<len; i++) {
	$('<i class="pager"></i>').appendTo($pagerSlide).click(onPagerClick).addClass((idx === i) ? 'active': '')
} */

/*************** Index *****************/
$(function () {
	init()

	function init() {
		weather()
		setCookie()
		slideMain()
		slideDream()
	}

	function setCookie() {
		var $cookieWrapper = $('.cookie-wrapper')
		var $cookieClose = $cookieWrapper.find('.bt-close')
		var $cookieConfirm = $cookieWrapper.find('.bt-confirm')

		if($.cookie('hideCookie') === 'Y') onCloseCookie()

		function onCloseCookie() {
			$('.cookie-wrapper').hide()
		}

		function onCloseTodayCookie() {
			$.cookie('hideCookie', 'Y', {
				expires: 1,
				path: '/'
			})
			onCloseCookie()
		}

		$cookieClose.click(onCloseCookie)
		$cookieConfirm.click(onCloseTodayCookie)
	}

	function slideMain() {
		var $slide = $('.main-wrapper .slide')
		var $pagerSlide = $('.main-wrapper .pager-slide')
		var video = $('.main-wrapper .video')[0]
		var len = $slide.length
		var lastIdx = len - 1
		var depth = 2
		var idx = 0
		var gap = 5000
		var speed = 500
		var timeout

		function onPagerClick() {
			idx = $(this).index()
			onPlay('pager')
		}

		function onModalVideo() {
			$('.modal-video').show()
		}
	
		function onModalVideoClose() {
			$('.modal-video').hide()
		}
	
		function onLoadedVideo() {
			if (video.readyState >= 2) {
				video.playbackRate = 4.0
			}
		}
	
		function ani() {
			$(this).addClass('active')
			video.currentTime = 0
			if ($slide.eq(idx).hasClass('is-video')) video.play()
			else {
				clearTimeout(timeout)
				timeout = setTimeout(onPlay, gap)
			}
		}
	
		function onPlay(e) {
			if (e !== 'pager') idx = (idx == lastIdx) ? 0 : idx + 1
			$pagerSlide.find('.pager').removeClass('active')
			$pagerSlide.find('.pager').eq(idx).addClass('active')
			$slide.eq(idx).css({
				'z-index': depth++,
				'left': '100%'
			})
			$slide.removeClass('active')
			$slide.eq(idx).stop().animate({
				'left': 0
			}, speed, ani)
		}

		$slide.eq(idx).css('z-index', depth++)
		$slide.eq(idx).addClass('active')
		for (var i = 0; i < len; i++) $pagerSlide.append('<i class="pager"></i>')
		$pagerSlide.find('.pager').click(onPagerClick)
		$pagerSlide.find('.pager').eq(idx).addClass('active')
		video.addEventListener('loadeddata', onLoadedVideo)
		video.addEventListener('ended', onPlay)
		$('.bt-video').click(onModalVideo)
		$('.modal-video').find('.bt-close').click(onModalVideoClose)

		ani()
	}

	function weather() {
		var $weather = $('.main-wrapper .weather')
		var weatherURL = 'https://api.openweathermap.org/data/2.5/weather'
		var weatherData = {
			appid: '02efdd64bdc14b279bc91d9247db4722',
			units: 'metric'
		}
		var weatherIcon = {
			i01d: 'bi-brightness-high',
			i01n: 'bi-brightness-high-fill',
			i02d: 'bi-cloud-sun',
			i02n: 'bi-cloud-sun-fill',
			i03d: 'bi-cloud',
			i03n: 'bi-cloud-fill',
			i04d: 'bi-clouds',
			i04n: 'bi-cloud-fills',
			i09d: 'bi-cloud-rain-heavy',
			i09n: 'bi-cloud-rain-heavy-fill',
			i10d: 'bi-cloud-drizzle',
			i10n: 'bi-cloud-drizzle-fill',
			i11d: 'bi-cloud-lightning',
			i11n: 'bi-cloud-lightning-fill',
			i13d: 'bi-cloud-snow',
			i13n: 'bi-cloud-snow-fill',
			i50d: 'bi-cloud-haze',
			i50n: 'bi-cloud-haze-fill',
		}

		function onGetWeather(r) {
			console.log(r)
			$weather.find('.icon').addClass(weatherIcon['i' + r.weather[0].icon])
			$weather.find('.temp').text(r.main.temp)
			$weather.find('.date').text(moment(r.dt * 1000).format('YYYY. M. D. ddd'))
			$weather.find('.time > span').text(moment(r.dt * 1000).format('hh:mm'))
			$weather.find('.time > small').text(moment(r.dt * 1000).format('A'))
		}
	
		function onGetGeo(r) {
			weatherData.lat = r.coords.latitude
			weatherData.lon = r.coords.longitude
			$.get(weatherURL, weatherData, onGetWeather)
		}
	
		function onErrorGeo() {
			weatherData.lat = 33.485739737138786
			weatherData.lon = 126.48154043372092
			$.get(weatherURL, weatherData, onGetWeather)
		}
		// 위치정보 가져오기(못 가져오면 제주도 보이기 33.485739737138786, 126.48154043372092)
		navigator.geolocation.getCurrentPosition(onGetGeo, onErrorGeo)
	}

	function slideDream() {
		var swiper = new Swiper('.dream-wrapper .swiper-container', {
			pagination: {
				el: '.dream-wrapper .pager-wrapper',
				clickable: true
			},
			navigation: {
				nextEl: '.dream-wrapper .bt-slide.right',
				prevEl: '.dream-wrapper .bt-slide.left',
			},
			autoplay: {
				delay: 3000,
			},
			loop: true,
			slidesPerView: 1,
			spaceBetween: 40,
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			}
		});

		$('.dream-wrapper .slide-stage').hover(function(){
			swiper.autoplay.stop()
		}, function(){
			swiper.autoplay.start()
		})
	}

})