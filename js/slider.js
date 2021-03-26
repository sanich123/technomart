const sliderButtons = document.querySelectorAll('.slider-controls-button');
const currentButton = document.querySelector('.current');

console.log(sliderButton);

for (let sliderButton of sliderButtons) {
  sliderButton.addEventListener('click', function(evt){
  evt.preventDefault();
  sliderButton.classList.add('current');}
});

