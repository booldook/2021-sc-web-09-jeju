var options = {
	videoURL: 'EGGe07oYRkU',
	containment: '.video-wrapper2',
	autoPlay: true, 
	mute: true, 
	startAt: 0,
	opacity: .5, 
	loop: true, 
	ratio: '4/3', 
	addRaster: false,
	showControls: false,
	showYTLogo: false,
	onReady: function() {
		
	},
	onError: function() {
		alert('동영상을 가져오는데 에러가 발생하였습니다.')
	}
}
$('#youtubeBg').YTPlayer(options);


/* var $video = $('.video-wrapper video')
$(window).resize(onResize)
function onResize() {
	var windowWidth = $(this).innerWidth()
	var videoWidth = $video.innerWidth()
	if(windowWidth > videoWidth) {
		$video.css({'width': '100%', 'height': 'auto'})
	}
	else {
		$video.css({'width': 'auto', 'height': '100%'})
	}
} */