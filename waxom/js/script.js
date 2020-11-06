$(document).ready(function () {
	// slider
	$('.intro__slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 1500,
	});
});

//responsive menu
let burger = document.querySelector('.header__burger');
let menuLinks = document.querySelector('.header__links');

burger.addEventListener('click', toggleF);
menuLinks.addEventListener('click', toggleF);

function toggleF() {
	burger.classList.toggle('active');
	menuLinks.classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

//fixed header
let header = document.querySelector('.header');
let intro = document.querySelector('.intro__body');

window.addEventListener('scroll', function () {
	if (window.pageYOffset > intro.offsetHeight) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
});

//video control
let video = document.querySelector('.video');
let playBtn = document.querySelector('#play');
let timePos = document.querySelector('.video-presentation__time');

playBtn.addEventListener('click', function () {
	if (!playBtn.classList.contains('active')) {
		video.play();
		setInterval(function () {
			timePos.textContent = ('0' + Math.floor(video.currentTime / 60)).slice(-2)
				+ ':' + ('0' + Math.trunc(video.currentTime % 60)).slice(-2);
		}, 1000);
	} else {
		video.pause();
	}
	playBtn.classList.toggle('active');
});

//smooth scroll
//console.log(document.querySelector('#projects').offsetTop);
// let body = document.querySelector('body');
// let menuLink = document.querySelectorAll('.header__link');
// menuLink.forEach(item => item.addEventListener('click', function () {
// 	let id = this.href;
// 	let pos = id.indexOf('#');
// 	console.log(id.slice(pos));

// 	window.scrollTo({
// 		top: (document.querySelector(id.slice(pos)).offsetTop - header.offsetHeight),
// 		left: 0,
// 		behavior: 'smooth',
// 	});

// }));


//statistics filling
let stat = document.querySelector('.statistics');
let nums = document.querySelectorAll('.statistics__number');
let arr = [];
let stop = null;
nums.forEach(item => arr.push(+item.textContent));
nums.forEach(item => item.textContent = 0);

let max = 0;
arr.forEach(function (item) {
	if (item > max)
		max = item;
});

window.addEventListener('scroll', function () {
	if (stat.getBoundingClientRect().top <= window.innerHeight) {
		if (stop == null) {
			stop = setInterval(setNums, 50);
		}
	}
});

function setNums() {
	for (let i = 0; i < arr.length; i++) {
		let cof = Math.ceil(arr[i] / 100);
		if (nums[i].textContent < arr[i]) {
			nums[i].textContent = +nums[i].textContent + cof;
		} else if (nums[i].textContent > arr[i]) {
			nums[i].textContent = arr[i];
		} else if (nums[i].textContent >= max) {
			clearInterval(stop);
		}
	}
}
