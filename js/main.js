// Burger menu

let burgerMenuBtn = document.querySelector('.burger_menu');
let firstLine = document.querySelector('.first');
let secondLine = document.querySelector('.second');
let thirdLine = document.querySelector('.third');
let mainMenuList = document.querySelector('.main_menu');
let opacityText = document.querySelector('.main_section h1');

burgerMenuBtn.addEventListener('click', function () {
	firstLine.classList.toggle('first_clicked');
	secondLine.classList.toggle('second_clicked');
	thirdLine.classList.toggle('third_clicked');
	mainMenuList.classList.toggle('mobile_menu_animation');
	if (opacityText != null) {
		opacityText.classList.toggle('opacity_text');
	}
	if (document.querySelector('.services_page') != null) {
		document
			.querySelector('.services_page')
			.classList.toggle('opacity_text');
	}
});

// Burger menu

// Anchors scroll

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	});
}

// Anchors scroll
