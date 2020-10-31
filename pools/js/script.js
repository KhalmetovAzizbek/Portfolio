$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px',
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.products__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});

document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowLeft') {
        let prev = document.querySelectorAll('.slick-prev');
        activate(prev);
    } else if (e.key == 'ArrowRight') {
        let next = document.querySelectorAll('.slick-next');
        activate(next);
    }
});

document.addEventListener('keyup', function (e) {
    document.querySelectorAll('.slick-arrow').forEach(item => item.classList.remove('active'));
});

function activate(buttons) {
    buttons.forEach(function (item) {
        if (item.getBoundingClientRect().y < window.innerHeight && item.getBoundingClientRect().y > 0) {
            item.click();
            item.classList.toggle('active');
            return;
        }
    });
    return
}