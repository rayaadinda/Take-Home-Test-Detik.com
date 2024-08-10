const swiper = new Swiper(".testi-slider", {
	grabCursor: true,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
})

document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.querySelector(".hamburger-menu")
	const navMenu = document.querySelector(".nav-menu")

	hamburger.addEventListener("click", function () {
		navMenu.classList.toggle("active")
		hamburger.classList.toggle("active")
	})
})
