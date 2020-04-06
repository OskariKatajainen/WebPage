const karuselliSlider = document.querySelector('.slider');
const karuselliImages = document.querySelectorAll('.slider img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = karuselliImages[0].clientWidth;

karuselliSlider.style.transform = 'translateX(' +(-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
	karuselliSlider.style.transition = "transform 0.4s ease-in-out";
	counter++;
	karuselliSlider.style.transform = 'translateX(' +(-size * counter) + 'px)';
});