'use strict';

const modalWraper = document.querySelector('.overlay_modal');
const openModal = document.querySelector('.btn-reservation');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function () {
    modalWraper.classList.add('open');
});

closeModal.addEventListener('click', function () {
    modalWraper.classList.remove('open');
});

const humb = document.querySelector('.humb');
const header = document.querySelector('.header-page');
const closeMenu = document.querySelector('.close-menu');

humb.addEventListener('click', function () {
    header.classList.add('open-menu')
});

closeMenu.addEventListener('click', function () {
    header.classList.remove('open-menu')
});
