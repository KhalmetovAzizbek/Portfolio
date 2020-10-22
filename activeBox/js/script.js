$(document).ready(function () {
	//Works Slick slider
	let worksSlider = $('#works');

	function setSlider() {
		if (window.innerWidth < 640 && !worksSlider.hasClass('slick-initialized')) {
			worksSlider.slick({
				infinite: false,
				slidesToShow: 1,
				slideToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 1500
			});
		} else if (window.innerWidth >= 640 && worksSlider.hasClass('slick-initialized')) {
			worksSlider.slick('unslick');
		}
	};

	setSlider();
	$(window).on('resize', setSlider);

	//Testimonials Slick slider
	let slider = $('#testimonials');

	slider.slick({
		infinite: false,
		slidesToShow: 1,
		slideToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1500
	});

	//Menu burger
	$('.header__burger, .header__link').click(function (event) {
		$('.header__burger, .header__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Fixed header
	let header = $('#header');
	let intro = $('#intro');
	let inthroH;
	let scrollPos;

	$(window).on('scroll load resize', function () {
		inthroH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > inthroH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	});

	//Smooth scroll
	$('.header__link, .header__logo').on('click', function (event) {
		event.preventDefault();

		let targetId = this.href.substr(this.href.lastIndexOf('#'));
		let elementOffset = $(targetId).offset().top;

		$('html, body').animate({
			scrollTop: elementOffset - 53
		}, 1000);

	});

});
