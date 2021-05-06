/* 
&& (AND연산자) - 둘 다 true일때만 true를 반환 / 그 외에는 false를 반환
|| (OR 연산자) - 둘 중 하나만 true여도 true를 반환 / 둘 다 false일때만 false를 반환
*/


/****************** mobile check ********************/
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


/****************** regExp ********************/
// Email 정규표현식
function validEmail(v) {
	var emailRegExp = /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
	return (v.match(emailRegExp) !== null) ? true : false
}

// 숫자, 문자, 특수문자를 포함한 8 ~ 16자리 정규표현식
function validPass(v) {
	var passRegExp = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
	return (v.match(passRegExp) !== null) ? true : false
}

// 핸드폰번호 정규식
function validMobile(v) {
	var mobileRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
	return (v.match(mobileRegExp) !== null) ? true : false
}

//일반 전화번호 정규식
function validPhone(v) {
	var phoneRegExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
	return (v.match(phoneRegExp) !== null) ? true : false
}



/****************** Array.sort() ********************/
function sortAsc(key) {
	return function(a, b) {
		return key ? a[key] - b[key] : a - b;
	}
}

function sortDesc(key) {
	return function(a, b) {
		return key ? b[key] - a[key] : b - a;
	}
}



/*************** Scroll Spy *****************/
function scrollSpy(el, cls, _gap) {
	$(window).scroll(onScrollSpy).trigger('scroll');
	function onScrollSpy() {
		var scrollTop = $(this).scrollTop();
		var pageOffset = [];
		var page;
		var gap = _gap || 300;
		$(el).each(function(i){
			pageOffset[i] = $(this).offset().top;
		})
	
		for(var i=1; i<pageOffset.length; i++) {
			if(scrollTop < pageOffset[i] - gap) break;
		}
		page = i - 1;
		$(el).eq(page).addClass(cls);
	}
}


/*************** getSwiper *****************/
/*
- cls : '.promo-wrapper
- opt 
{
	pager: true,
	navi: true,
	auto: true,
	autoEl: '.slide-stage'
	delay: 3000,
	loop: true,
	space: 40,
	break: 1
}
*/
function getSwiper(el, opt) {
	var opt = opt || {};
	var autoEl = el + ' ' + (opt.autoEl || '.slide-stage');
	var pagination = (opt.pager === false) ? false : {
		el: el + ' .pager-wrapper',
		clickable: true
	}

	var navigation = (opt.navi === false) ? false : {
		nextEl: el + ' .bt-slide.right',
		prevEl: el + ' .bt-slide.left',
	}

	var autoplay = (opt.auto === false) ? false : {
		// delay: opt.delay ? opt.delay : 3000
		delay: opt.delay || 3000
	}

	var breakpoints = {};
	if(opt.break == 2) {
		breakpoints = {
			'768': { slidesPerView: 2}
		}
	}
	else if(opt.break == 3) {
		breakpoints = {
			'768': { slidesPerView: 2},
			'1200': { slidesPerView: 3}
		}
	}
	else if(opt.break == 4) {
		breakpoints = {
			'576': { slidesPerView: 2},
			'992': { slidesPerView: 3},
			'1200': { slidesPerView: 4}
		}
	}
	else if(opt.break == 5) {
		breakpoints = {
			'576': { slidesPerView: 2},
			'768': { slidesPerView: 3},
			'992': { slidesPerView: 4},
			'1200': { slidesPerView: 5}
		}
	}
	else if(opt.break > 5) {
		breakpoints = {
			'576': { slidesPerView: opt.break - 3},
			'768': { slidesPerView: opt.break - 2},
			'992': { slidesPerView: opt.break - 1},
			'1200': { slidesPerView: opt.break}
		}
	}

	var swiper = new Swiper(el + ' .swiper-container', {
		pagination: pagination,
		navigation: navigation,
		autoplay: autoplay,
		loop: opt.loop === false ? false : true,
		speed: opt.speed || 500,
		slidesPerView: opt.break && opt.break > 5 ? opt.break - 4 : 1,
		// slidesPerView: opt.break ? opt.break : 1,
		spaceBetween: opt.space === undefined ? 40 : opt.space,
		breakpoints: breakpoints
	})

	$(autoEl).hover(function(){
		swiper.autoplay.stop();
	}, function(){
		swiper.autoplay.start();
	})

	function onResize(e) {
		$(el + ' .ratio-wrap').each(function(i) {
			var ratio = $(this).data('ratio') // data-ratio
			var width = $(this).innerWidth();
			var height = width * Number(ratio);
			$(this).innerHeight(height);
		})
	}
	
	$(window).resize(onResize).trigger('resize');

	return swiper;
}


/*************** Object Deepcopy *****************/
function cloneObject(obj) {
	// var props = {...slick}; // ES6 DeepCopy
	return JSON.parse(JSON.stringify(obj));
}