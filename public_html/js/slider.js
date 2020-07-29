/*Галерея 1*/
$(document).ready(function () {
    var slidenum = 0;
    var navBtnId = 0;

    $('.gallery-controls-1').click(function() {
    navBtnId = $(this).index();
    if (navBtnId != slidenum) {
        $('.gallery_viewport-1 > li').eq(slidenum).fadeOut(300);
        $('.gallery_viewport-1 > li').eq(navBtnId).fadeIn(300);
        slidenum = navBtnId;
    }
    });
    $('.gallery_viewport-1 > li').hide().eq(0).show();
});
/*Галерея 2*/
$(document).ready(function () {
    var slidenum = 0;
    var navBtnId = 0;
    $('.gallery-controls-2').click(function() {
    navBtnId = $(this).index();
    if (navBtnId != slidenum) {
        $('.gallery_viewport-2 > li').eq(slidenum).fadeOut(300);
        $('.gallery_viewport-2 > li').eq(navBtnId).fadeIn(300);
        slidenum = navBtnId;
    }
    });
    $('.gallery_viewport-2 > li').hide().eq(0).show();
});
/*Галерея 3*/
$(document).ready(function () {
    var slidenum = 0;
    var navBtnId = 0;
    $('.gallery-controls-3').click(function() {
    navBtnId = $(this).index();
    if (navBtnId != slidenum) {
        $('.gallery_viewport-3 > li').eq(slidenum).fadeOut(300);
        $('.gallery_viewport-3 > li').eq(navBtnId).fadeIn(300);
        slidenum = navBtnId;
    }
    });
    $('.gallery_viewport-3 > li').hide().eq(0).show();
});
/*Галерея 4*/
$(document).ready(function () {
    var slidenum = 0;
    var navBtnId = 0;
    $('.gallery-controls-4').click(function() {
    navBtnId = $(this).index();
    if (navBtnId != slidenum) {
        $('.gallery_viewport-4 > li').eq(slidenum).fadeOut(300);
        $('.gallery_viewport-4 > li').eq(navBtnId).fadeIn(300);
        slidenum = navBtnId;
    }
    });
    $('.gallery_viewport-4 > li').hide().eq(0).show();
});
/*Галерея 5*/
$(document).ready(function () {
    var slidenum = 0;
    var navBtnId = 0;
    $('.gallery-controls-5').click(function() {
    navBtnId = $(this).index();
    if (navBtnId != slidenum) {
        $('.gallery_viewport-5 > li').eq(slidenum).fadeOut(300);
        $('.gallery_viewport-5 > li').eq(navBtnId).fadeIn(300);
        slidenum = navBtnId;
    }
    });
    $('.gallery_viewport-5 > li').hide().eq(0).show();
});
/*Галерея 6*/
$(document).ready(function () {
    var slidenum = 0;
    var navBtnId = 0;
    $('.gallery-controls-6').click(function() {
    navBtnId = $(this).index();
    if (navBtnId != slidenum) {
        $('.gallery_viewport-6 > li').eq(slidenum).fadeOut(300);
        $('.gallery_viewport-6 > li').eq(navBtnId).fadeIn(300);
        slidenum = navBtnId;
    }
    });
    $('.gallery_viewport-6 > li').hide().eq(0).show();
});
/*Галерея 7*/
$(document).ready(function () {
    var slidenum = 0;
    var navBtnId = 0;
    $('.gallery-controls-7').click(function() {
    navBtnId = $(this).index();
    if (navBtnId != slidenum) {
        $('.gallery_viewport-7 > li').eq(slidenum).fadeOut(300);
        $('.gallery_viewport-7 > li').eq(navBtnId).fadeIn(300);
        slidenum = navBtnId;
    }
    });
    $('.gallery_viewport-7 > li').hide().eq(0).show();
});


