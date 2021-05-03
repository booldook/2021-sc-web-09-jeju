/****************** regExp ********************/
// Email 정규표현식
var emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,4}$/i;

// 숫자, 문자, 특수문자를 포함한 8 ~ 16자리 정규표현식
var passRegExp = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

// 핸드폰번호 정규식
var mobileRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

//일반 전화번호 정규식
var phoneRegExp = /^\d{2,3}-\d{3,4}-\d{4}$/;

function validEmail(v) {
	return (v.match(emailRegExp) !== null) ? true : false
}

function validPass(v) {
	return (v.match(passRegExp) !== null) ? true : false
}

function validMobile(v) {
	return (v.match(mobileRegExp) !== null) ? true : false
}

function validPhone(v) {
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