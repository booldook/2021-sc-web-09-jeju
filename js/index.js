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

	var slick = {
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		touchThreshold: 10,
		arrows: false,
		dots: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
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
	}

	weather();
	setCookie();
	slideMain();
	slideDream();
	slidePromo();
	initStyle();
	slideRoom();
	slideSvc();
	slideSns();
	initContact();

	function setCookie() {
		var $cookieWrapper = $('.cookie-wrapper');
		var $cookieClose = $cookieWrapper.find('.bt-close');
		var $cookieConfirm = $cookieWrapper.find('.bt-confirm');

		if ($.cookie('hideCookie') === 'Y') onCloseCookie();

		function onCloseCookie() {
			$('.cookie-wrapper').hide();
		}

		function onCloseTodayCookie() {
			$.cookie('hideCookie', 'Y', {
				expires: 1,
				path: '/'
			});
			onCloseCookie();
		}

		$cookieClose.click(onCloseCookie);
		$cookieConfirm.click(onCloseTodayCookie);
	}

	function slideMain() {
		var $slide = $('.main-wrapper .slide');
		var $pagerSlide = $('.main-wrapper .pager-slide');
		var video = $('.main-wrapper .video')[0];
		var len = $slide.length;
		var lastIdx = len - 1;
		var depth = 2;
		var idx = 0;
		var gap = 5000;
		var speed = 500;
		var timeout;

		function onPagerClick() {
			idx = $(this).index();
			onPlay('pager');
		}

		function onModalVideo() {
			$('.modal-video').show();
		}

		function onModalVideoClose() {
			$('.modal-video').hide();
		}

		function onLoadedVideo() {
			if (video.readyState >= 2) {
				// video.playbackRate = 4.0;
			}
		}

		function onAni() {
			$(this).addClass('active');
			video.currentTime = 0;
			if ($slide.eq(idx).hasClass('is-video')) video.play();
			else {
				clearTimeout(timeout);
				timeout = setTimeout(onPlay, gap);
			}
		}

		function onPlay(e) {
			if (e !== 'pager') idx = (idx == lastIdx) ? 0 : idx + 1;
			$pagerSlide.find('.pager').removeClass('active');
			$pagerSlide.find('.pager').eq(idx).addClass('active');
			$slide.eq(idx).css({
				'z-index': depth++,
				'left': '100%'
			})
			$slide.removeClass('active');
			$slide.eq(idx).stop().animate({
				'left': 0
			}, speed, onAni);
		}

		$slide.eq(idx).css('z-index', depth++);
		$slide.eq(idx).addClass('active');
		for (var i = 0; i < len; i++) $pagerSlide.append('<i class="pager"></i>');
		$pagerSlide.find('.pager').click(onPagerClick);
		$pagerSlide.find('.pager').eq(idx).addClass('active');
		video.addEventListener('loadeddata', onLoadedVideo);
		video.addEventListener('ended', onPlay);
		$('.bt-video').click(onModalVideo);
		$('.modal-video').find('.bt-close').click(onModalVideoClose);

		video.addEventListener('loadedmetadata', onAni); // 시작시점
	}

	function weather() {
		var $weather = $('.main-wrapper .weather');
		var weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
		var weatherData = {
			appid: '02efdd64bdc14b279bc91d9247db4722',
			units: 'metric'
		};
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
			console.log(r);
			$weather.find('.icon').addClass(weatherIcon['i' + r.weather[0].icon]);
			$weather.find('.temp').text(r.main.temp);
			$weather.find('.date').text(moment(r.dt * 1000).format('YYYY. M. D. ddd'));
			$weather.find('.time > span').text(moment(r.dt * 1000).format('hh:mm'));
			$weather.find('.time > small').text(moment(r.dt * 1000).format('A'));
		}

		function onGetGeo(r) {
			weatherData.lat = r.coords.latitude;
			weatherData.lon = r.coords.longitude;
			$.get(weatherURL, weatherData, onGetWeather);
		}

		function onErrorGeo() {
			weatherData.lat = 33.485739737138786;
			weatherData.lon = 126.48154043372092;
			$.get(weatherURL, weatherData, onGetWeather);
		}
		// 위치정보 가져오기(못 가져오면 제주도 보이기 33.485739737138786, 126.48154043372092)
		navigator.geolocation.getCurrentPosition(onGetGeo, onErrorGeo);
	}

	function slideDream() {
		// var swiper = getSwiper('.dream-wrapper', { break: 3 });
		var $slick = $('.dream-wrapper .slide-wrapper');
		var $btPrev = $('.dream-wrapper .bt-slide.left');
		var $btNext = $('.dream-wrapper .bt-slide.right');
		var options = cloneObject(slick);
		$slick.slick(options);
		makeSlickButton($slick, $btPrev, $btNext);
	}

	function slidePromo() {
		var $promo = $('.promo-wrapper');
		var $slick = $promo.find('.slide-wrapper');
		var $btPrev = $promo.find('.bt-slide.left');
		var $btNext = $promo.find('.bt-slide.right');
		var options = cloneObject(slick);

		function onGetData(r) {
			// for(var i=0; i<r.promo.length; i++) {}
			r.promo.forEach(function (v, i) {
				var html = '';
				html += '<li class="slide">';
				html += '<div class="img-wrap ratio-wrap" data-ratio="1">';
				html += '<div class="ratio-bg" style="background-image: url(' + v.src + ');"></div>';
				html += '</div>';
				html += '<div class="cont-wrap">';
				html += '<h3 class="title">' + v.title + '</h3>';
				html += '<div class="desc">' + v.desc + '</div>';
				html += '</div>';
				html += '</li>';
				$slick.append(html);
			});
			
			options.slidesToShow = 4;
			options.dots = false;
			options.responsive.unshift({breakpoint: 992, settings: {slidesToShow: 3}});
			$slick.slick(options);
			makeSlickButton($slick, $btPrev, $btNext);
			$(window).trigger('resize');
		}
		$.get('../json/promotion.json', onGetData); // init
	}

	function initStyle() {
		
	}

	function slideRoom() {
		var room = [], swiper;
		var $room = $('.room-wrapper');
		var $slick = $room.find('.slide-wrapper');
		var $movingBox = $('.room-wrapper .desc-wrapper .moving-box');
		var $tag = $('.room-wrapper .desc-wrapper .tag > div');
		var $title = $('.room-wrapper .desc-wrapper .title > div');
		var $desc = $('.room-wrapper .desc-wrapper .desc > div');
		var $btPrev = $room.find('.bt-slide.left');
		var $btNext = $room.find('.bt-slide.right');
		var options = cloneObject(slick);

		function onGetData(r) {
			room = r.room.slice();
			options.slidesToShow = 2;
			options.dots = false;
			options.responsive.pop();	// 배열의 마지막 요소를 빼낸다
			options.responsive[0].breakpoint = 992;
			options.responsive[0].settings.slidesToShow = 1;
			$slick.slick(options);
			makeSlickButton($slick, $btPrev, $btNext);
			$(window).trigger('resize');

			// swiper.on('slideChange', onBefore);
			// swiper.on('slideChangeTransitionEnd', onAfter);
			// showDesc(0);
		}

		function onBefore() {
			$movingBox.removeClass('active');
		}

		function onAfter() {
			var idx = this.realIndex;
			showDesc(idx);
		}

		function showDesc(n) {
			$tag.text(room[n].tag);
			$title.text(room[n].title);
			$desc.text(room[n].desc);
			$movingBox.addClass('active');
		}
		$.get('../json/room.json', onGetData);
	}

	function slideSvc() {
		var $slideWrapper = $('.svc-wrapper .slide-wrapper');
		var swiper, lastIdx;

		function onGetData(r) {
			lastIdx = r.svc.length - 1;
			r.svc.forEach(function (v, i) {
				var html = '';
				html += '<li class="slide swiper-slide" title="' + i + '">';
				html += '<div class="img-wrap">';
				html += '<img src="' + v.src + '" alt="svc" class="w-100">';
				html += '</div>';
				html += '<h4 class="title">' + v.title + '</h4>';
				html += '</li>';
				$slideWrapper.append(html);
			})
			/* swiper = getSwiper('.svc-wrapper', {
				break: 2,
				speed: 600,
				pager: false
			});
			swiper.on('slideChange', onChange);
			showAni(1); */
		}

		function onChange() {
			showAni((this.realIndex == lastIdx) ? 0 : this.realIndex + 1);
		}

		function showAni(n) {
			$slideWrapper.find('.slide').removeClass('active');
			$slideWrapper.find('.slide[title="' + n + '"]').addClass('active');
		}
		$.get('../json/svc.json', onGetData);
	}

	function slideSns() {
		var $slideWrapper = $('.sns-wrapper .slide-wrapper');
		var swiper;

		function onGetData(r) {
			r.sns.forEach(function (v, i) {
				var html = '';
				html += '<li class="slide swiper-slide">';
				html += '<img src="' + v.src + '" alt="이벤트" class="w-100">';
				html += '<i class="icon fab fa-instagram"></i>';
				html += '</li>';
				$slideWrapper.append(html);
			})
			/* swiper = getSwiper('.sns-wrapper', {
				break: 7,
				space: 0,
				pager: false
			}); */
		}
		$.get('../json/sns.json', onGetData);
	}

	function initContact() {
		/********* Global *********/
		var emailChk = false; // 이메일 검증을 통과했는가?
		var agreeChk = false; // 이용약관을 동의했는가?
		var $form = $('.contact-wrapper .mail-form');
		var $input = $('.contact-wrapper .mail-input');
		var $button = $('.contact-wrapper .mail-send');
		var $alert = $('.contact-wrapper .valid-alert');
		var $check = $('.contact-wrapper .agree-mail');

		/********* Event Init *********/
		$input.blur(onBlur);
		$check.change(onChange);
		$form.submit(onSubmit);

		/********* Event Callback *********/
		function onBlur() {
			var email = $(this).val().trim();
			if (validEmail(email)) {
				emailChk = true;
				$alert.removeClass('active')
			} else {
				emailChk = false;
				$alert.addClass('active')
			}
			$button.attr('disabled', (emailChk && agreeChk) ? false : true)
		}

		function onChange() {
			agreeChk = $(this).is(':checked');
			$button.attr('disabled', (emailChk && agreeChk) ? false : true)
		}

		function onSubmit(e) {
			e.preventDefault(); // submit이므로 전송되어야 하는데 전송기능을 막는다.
			$form[0].contact_number.value = Math.random() * 100000 | 0;
			emailjs.sendForm('service_gmail', 'template_gmail', this).then(function () {
				alert('뉴스레터 신청이 완료되었습니다.');
				$form[0].reset();
				$button.attr('disabled', true)
				agreeChk = false;
				emailChk = false;
			}, function (error) {
				alert('뉴스레터 신청 오류!\n관리자에게 문의하세요.')
			});
			return false;
		}

		/********* User Function *********/
		emailjs.init('user_TROFqVnbPGZyygPAci7nt'); // 본인거로 꼭 바꿔넣으세요.
	}
	
	
	/********* Global Function *********/
	function makeSlickButton($slick, $prev, $next) {
		$prev.click(function() { 
			$slick.slick('slickPrev') 
		});
		$next.click(function() { 
			$slick.slick('slickNext') 
		});
		$slick.find('.slick-dots').on('mouseenter', function() {
			$slick.slick('slickPause');
		});
		$slick.find('.slick-dots').on('mouseleave', function() {
			$slick.slick('slickPlay');
		});
	}
	
	function onResize(e) {
		$('.ratio-wrap').each(function(i) {
			var ratio = $(this).data('ratio');
			var width = $(this).innerWidth();
			var height = width * Number(ratio);
			$(this).innerHeight(height);
		})
	}
	
	
	$(window).resize(onResize).trigger('resize');
})