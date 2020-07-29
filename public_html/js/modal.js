$(document)
    .ready(function () {
        var modal = $('.popup'),
            overlay = $('.overlay'),
            link = $('button[data-popup="true"]'),
            close = $('.close-btn');

        close.click(function () {
            modal.toggleClass('popup_active');
            overlay.hide();
        });

        link.on('click', function () {
            overlay.show();
            modal.toggleClass('popup_active');
        });

        $("html").css('visibility', 'visible');
    })
    .on('click', '.warning__yes', e => {
        e.preventDefault();
        $.magnificPopup.close();
    })
    .on('click', '.success__button', e => {
        e.preventDefault();
        $.magnificPopup.close();
    })
    .on('click', '[data-modal]', e => {
        e.preventDefault()

        let $link = $(e.target).closest('a'),
            href = $link.attr('href'),
            type = href.charAt(0) == '#' ? 'inline' : 'ajax'

        $.magnificPopup.open(
            {
                items: {
                    src: href,
                },
                delegate: 'a',
                type: type,
                removalDelay: 0,
                midClick: true,
                mainClass: 'mfp-zoom-in',
                callbacks: {
                    open: function () {
                        // lockBody();
                    },
                    close: function () {
                        // unlockBody();
                    },
                },
            },
            0
        )
    })
    .on('submit', '#main-form', function(e) {
        e.preventDefault();

        let base_url = window.location.origin;

        $.ajax({
            type: "POST",
            url: base_url + "/save.php",
            data: $(this).serialize(),
            success: function() {
                $.magnificPopup.open(
                    {
                        items: {
                            src: '#success',
                        },
                        delegate: 'a',
                        type: 'inline',
                        removalDelay: 0,
                        midClick: true,
                        mainClass: 'mfp-zoom-in',
                    },
                    0
                )
                $('#main-form').trigger("reset");
            }
        });
        // console.log('done');
    });
