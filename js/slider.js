/*const servicesButtons = document.querySelectorAll('.services-button');

for (let servicesButton of servicesButtons) {
  console.log(servicesButton);
  servicesButton.addEventListener('click', function(evt){
    evt.preventDefault();
    servicesButton.classList.add('current');
  })
};
*/
const button1 = document.querySelector('.services-button:nth-child(1)');
const button2 = document.querySelector('.services-button:nth-child(2)');
const button3 = document.querySelector('.services-button:nth-child(3)');
const delivery = document.querySelector('.service-list-item:nth-child(1)');
const garanty = document.querySelector('.service-list-item:nth-child(2)');
const credit = document.querySelector('.service-list-item:nth-child(3)');

button2.addEventListener('click', function(evt){
  evt.preventDefault();
  garanty.classList.remove('visually-hidden');
  delivery.classList.add('visually-hidden');
  credit.classList.add('visually-hidden');
  button2.classList.add('current');
  button1.classList.remove('current');
  button3.classList.remove('current');
});

button3.addEventListener('click', function(evt){
  evt.preventDefault();
  credit.classList.remove('visually-hidden');
  garanty.classList.add('visually-hidden');
  delivery.classList.add('visually-hidden');
  button3.classList.add('current');
  button2.classList.remove('current');
  button1.classList.remove('current');
});

button1.addEventListener('click', function(evt){
  evt.preventDefault();
  delivery.classList.remove('visually-hidden');
  credit.classList.add('visually-hidden');
  garanty.classList.add('visually-hidden');
  button1.classList.add('current');
  button3.classList.remove('current');
  button2.classList.remove('current');
});


const slideForward = document.querySelector('.slider-button-2');
const slideBack = document.querySelector('.slider-button-1');
const slidePerforator = document.querySelector('.perforator');
const slideDrill = document.querySelector('.drill');

slideForward.addEventListener('click', function(evt){
slidePerforator.classList.remove('slide-current');
slideDrill.classList.add('slide-current');
});

slideBack.addEventListener('click', function(evt){
  slidePerforator.classList.add('slide-current');
  slideDrill.classList.remove('slide-current');
  });

  const slideBack2 = document.querySelector('.two');
  slideBack2.addEventListener('click', function(evt){
    evt.preventDefault();
    slidePerforator.classList.add('slide-current');
    slideDrill.classList.remove('slide-current');
  });

const buttonForward = document.querySelector('.right');
const buttonBack = document.querySelector('.slider-controls-button');

buttonForward.addEventListener('click', function(evt){
  evt.preventDefault();
  slidePerforator.classList.remove('slide-current');
  slideDrill.classList.add('slide-current');
  buttonForward.classList.remove('current');
  buttonBack.classList.add('current');
  });

buttonBack.addEventListener('click', function (evt) {
  evt.preventDefault();
  slidePerforator.classList.add('slide-current');
  slideDrill.classList.remove('slide-current');
  buttonForward.classList.add('current');
  buttonBack.classList.remove('current');
});

