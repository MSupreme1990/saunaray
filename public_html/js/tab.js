$(function(event) {
	var tab = $('a[data-toggle="tab"]');
	var navLink = $('a[data-toggle="menu"]');
	navLink.on('click', function(event) {
		event.preventDefault();
		var top = $('#scroll-saunas').offset().top;
		if(!scrolled) {
			scrolled = true;
			$('html,body').animate({scrollTop: top}, 500, function(){
				scrolled = false;
			});
		}
		$('.active').removeClass('active');
		$('.nav-tabs > li > a[toggle='+$(this).attr('toggle')+']').parent().toggleClass('active');
		var target = $(this).attr('href');
		$(target).toggleClass('active');
	});
});
$(function() {
	var tab = $('a[data-toggle="tab"]');

	tab.on('click', function() {
		event.preventDefault();
		$('.active').removeClass('active');
		$(this).parent().toggleClass('active');
		var target = $(this).attr('href');
		$(target).toggleClass('active');
	});
});
