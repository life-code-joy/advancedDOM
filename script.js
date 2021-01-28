'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// select entire document
console.log(document);
console.log(document.documentElement);

// create HTML elements
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  '<h3>We use cookies for better functionality and they are delicious!</h3><button class="btn btn--close-cookie">Got it and delicious</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.before(after);

//remove element

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
// get computed style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// get the css from a stylesheet
console.log(getComputedStyle(message).color);

//// change height

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 80 + 'px';

//change the css variable
document.documentElement.style.setProperty('--color-primary', 'green');

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

console.log(logo);

logo.alt = 'Beautiful minimalist logo';

//non standard

console.log(logo.designer); // undefined becasue not a  default attribute on the img

console.log(logo.getAttribute('designer')); // will get the non-standard added attribute

console.log(logo.designer);

logo.setAttribute('company', 'Bankist');
console.log(logo);
