/****************** Array.sort() ********************/
function sortAsc(key) {
	return function(a, b) {
		return key ? a[key] - b[key] : a - b
	}
}

function sortDesc(key) {
	return function(a, b) {
		return key ? b[key] - a[key] : b - a
	}
}



/*************** Scroll Spy *****************/
function scrollSpy(el, cls, _gap) {
	$(window).scroll(onScrollSpy).trigger('scroll')
	function onScrollSpy() {
		var scrollTop = $(this).scrollTop()
		var pageOffset = []
		var page
		var gap = _gap || 300
		$(el).each(function(i){
			pageOffset[i] = $(this).offset().top
		})
	
		for(var i=1; i<pageOffset.length; i++) {
			if(scrollTop < pageOffset[i] - gap) break
		}
		page = i - 1
		$(el).eq(page).addClass(cls)
	}
}
