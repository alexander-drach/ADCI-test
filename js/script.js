'use strict';

/* modal */
const modalWraper = document.querySelector('.overlay_modal');
const openModal = document.querySelector('.btn-reservation');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function () {
    modalWraper.classList.add('open');
});

closeModal.addEventListener('click', function () {
    modalWraper.classList.remove('open');
});
/* modal end*/

/* humb */
const humb = document.querySelector('.humb');
const header = document.querySelector('.header-page');
const closeMenu = document.querySelector('.close-menu');

humb.addEventListener('click', function () {
    header.classList.add('open-menu')
});

closeMenu.addEventListener('click', function () {
    header.classList.remove('open-menu')
});
/* humb end */

/* show posts */
/*
const btnShowPosts = document.querySelector('.btn-show-posts');
const posts = document.querySelector('.posts');

btnShowPosts.addEventListener('click', function () {

    if (posts.classList.contains('show-posts')) {
        posts.classList.remove('show-posts');
        posts.classList.add('out-posts');
    } else {
        posts.classList.remove('out-posts');
        posts.classList.add('show-posts');
    }

});
*/
/* show posts end*/

