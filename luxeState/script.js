$(document).ready(function () {
	//Burger menu
	$('.header__burger, .header__link').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	//Smooth scroll
	$('.header__link, .header__logo, #navTop').on('click', function (event) {
		event.preventDefault();

		let targetId = this.href.substr(this.href.lastIndexOf('#'));
		let elementOffset = $(targetId).offset().top;

		$('html, body').animate({
			scrollTop: elementOffset
		}, 1000);

	});

	// Accordion
	function AccordionOn() {
		if (window.innerWidth <= 576) {
			$('.links__subtitle').not($(this)).removeClass('active');
			$('.links__column').not($(this).next()).slideUp(300);
			$(this).toggleClass('active').next().slideToggle(300);
		}
		else if (window.innerWidth > 576) {
			$('.links__column').slideDown(300);
		}
	}
	$(window).on('resize load', AccordionOn);
	$('.links__subtitle').on('click', AccordionOn);

});
