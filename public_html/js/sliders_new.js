$(document).ready(function () {
    // Слайдеры для desctop версии
    $('.slider-for-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery1'
    });

    $('.slider-nav-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery1',
        dots: false,
        centerMode: true,
        arrows: true
    });

    $('.slider-for-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery2'
    });

    $('.slider-nav-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery2',
        dots: false,
        centerMode: true,
        arrows: true
    });

    $('.slider-for-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery3'
    });

    $('.slider-nav-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery3',
        dots: false,
        centerMode: true,
        arrows: true
    });

    $('.slider-for-4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery4'
    });

    $('.slider-nav-4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery4',
        dots: false,
        centerMode: true,
        arrows: true
    });

    $('.slider-for-5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery5'
    });

    $('.slider-nav-5').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery5',
        dots: false,
        centerMode: true,
        arrows: true
    });

    $('.slider-for-6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery6'
    });

    $('.slider-nav-6').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery6',
        dots: false,
        centerMode: true,
        arrows: true
    });

    $('.slider-for-7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery7'
    });

    $('.slider-nav-7').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery7',
        dots: false,
        centerMode: true,
        arrows: true
    });

    $('.slider-for-8').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#desktop__small_gallery8'
    });

    $('.slider-nav-8').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#desktop__big_gallery8',
        dots: false,
        centerMode: true,
        arrows: true
    });

    // Слайдеры для mobile версии
    // Главный слайдер
    $('.slider__for--main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider__nav--main'
    });
    $('.slider__nav--main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.slider__for--main'
    });
    $('.slider-for-1--gallery, .slider-nav-1--gallery, .slider-for-2--gallery, .slider-nav-2--gallery , .slider-for-3--gallery, .slider-nav-3--gallery, .slider-for-4--gallery, .slider-nav-4--gallery, .slider-for-5--gallery, .slider-nav-5--gallery, .slider-for-6--gallery, .slider-nav-6--gallery, .slider-for-7--gallery, .slider-nav-7--gallery, .slider-for-8--gallery, .slider-nav-8--gallery')
        .on('touchstart touchmove mousemove mouseenter', e => {
            $('.slider__for--main').slick('slickSetOption', 'swipe', false, false);
            $('.slider__nav--main').slick('slickSetOption', 'swipe', false, false);
        })
        .on('touchend mouseover mouseout', e => {
            $('.slider__for--main').slick('slickSetOption', 'swipe', true, false);
            $('.slider__nav--main').slick('slickSetOption', 'swipe', true, false);
        })
        .on('click', e => {
            $('.slider__for--main').slick('slickSetOption', 'swipe', true, false);
            $('.slider__nav--main').slick('slickSetOption', 'swipe', true, false);
        });


    // Вложенные слайдеры
    // 1 галлерея
    $('.slider-for-1--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav1'
    });

    $('.slider-nav-1--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery1',
        dots: false,
        centerMode: true,
        arrows: true,
    });

    // 2 галлерея
    $('.slider-for-2--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav2'
    });

    $('.slider-nav-2--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery2',
        dots: false,
        centerMode: true,
        arrows: true,
    });

    // 3 галлерея
    $('.slider-for-3--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav3'
    });

    $('.slider-nav-3--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery3',
        dots: false,
        centerMode: true,
        arrows: true,
    });

    // 4 галлерея
    $('.slider-for-4--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav4'
    });

    $('.slider-nav-4--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery4',
        dots: false,
        centerMode: true,
        arrows: true,
    });

    // 5 галлерея
    $('.slider-for-5--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav5'
    });

    $('.slider-nav-5--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery5',
        dots: false,
        centerMode: true,
        arrows: true,
    });

    // 6 галлерея
    $('.slider-for-6--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav6'
    });

    $('.slider-nav-6--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery6',
        dots: false,
        centerMode: true,
        arrows: true,
    });

    // 7 галлерея
    $('.slider-for-7--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav7'
    });

    $('.slider-nav-7--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery7',
        dots: false,
        centerMode: true,
        arrows: true,
    });

    // 8 галлерея
    $('.slider-for-8--gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#nav8'
    });

    $('.slider-nav-8--gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#gallery8',
        dots: false,
        centerMode: true,
        arrows: true,
    });

});

// Переключатель на нужный слайд по саунам
$(document).on('click', '.global-nav__slider', event => {
    let $target = $(event.target).closest('.global-nav__item');

    $('.slider__for--main').slick('slickGoTo', $target.index());



});

const HEADER_OFFSET = 71;
const SCROLL_SPEED = 800;

$(document).on('click', '[data-scroll]', event => {

    event.preventDefault();

    let $source = $(event.target).closest('[data-scroll]'),
        $target = $($source.attr('data-scroll'))

    if ($target.length > 0) {
        $('body,html').animate(
            { scrollTop: $target.offset().top - 30 - HEADER_OFFSET },
            SCROLL_SPEED
        )
    }
});