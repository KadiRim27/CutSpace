const menuBurger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuBurger) {
    menuBurger.addEventListener("click", function (e) {
        menuBurger.classList.toggle('_active');
        if (menuBody) {
            menuBody.classList.toggle('_active');
        }
    })
}

//swiper


const swiper = new Swiper('.image-slider', {
	

	mousewheel: {
		sensitivity: 1,
	},
	slidesPerView: 1.3,
	watchOverflow: true,
	freeMode: true,
	autoplay: {
		delay: 1000,
		stopOnLastSlide: true,
		disableOnInterction:false
	},
	speed: 800,
	spaceBetween: 20,
	loop:true,
	
	
	
});