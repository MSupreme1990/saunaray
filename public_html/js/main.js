// $.magnificPopup.open({
//     items: {
//         src: '#test-popup'
//     },
//     closeOnBgClick: false,
//     showCloseBtn: false
// });


function setHeiHeight() {
    $('header').css({
        height: $(window).height() + 'px'
    });
}
setHeiHeight();
$(window).resize( setHeiHeight );
var scrolled = false;
$(document).on("scroll", function (event) { 
var height = $('header').height(); 
var top = $('header').height() / 2; 
var scrolt = $(window).scrollTop();
if(!scrolled && scrolt < top && scrolt > 5) {
	$('.header_bottom').css({
        	'transform' : 'translateY(100%)',
    });
	$('body').addClass('stop-scroll');
	scrolled = true;
	$('html').animate({scrollTop:height}, 700, function(){
		scrolled = false;
	});
	setTimeout(function(){
	$('body').removeClass('stop-scroll');
	}, 1000);
} else if (!scrolled && scrolt < height && scrolt > top) {
	$('.header_bottom').css({
        	'transform' : 'translateY(0%)',
    });
	$('body').addClass('stop-scroll');
	scrolled = true;
	$('html').animate({scrollTop:0}, 700, function(){
		scrolled = false;
	});
	setTimeout(function(){
	$('body').removeClass('stop-scroll');
	}, 1000);
}
});



