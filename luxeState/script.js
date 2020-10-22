$(document).ready(function () {
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
});
