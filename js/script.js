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
