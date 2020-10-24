/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("\r\n\r\n/* modal */\r\nconst modalWraper = document.querySelector('.overlay_modal');\r\nconst openModal = document.querySelector('.btn-reservation');\r\nconst closeModal = document.querySelector('.close-modal');\r\n\r\nopenModal.addEventListener('click', function () {\r\n    modalWraper.classList.add('open');\r\n});\r\n\r\ncloseModal.addEventListener('click', function () {\r\n    modalWraper.classList.remove('open');\r\n});\r\n/* modal end*/\r\n\r\n/* humb */\r\nconst humb = document.querySelector('.humb');\r\nconst header = document.querySelector('.header-page');\r\nconst closeMenu = document.querySelector('.close-menu');\r\n\r\nhumb.addEventListener('click', function () {\r\n    header.classList.add('open-menu')\r\n});\r\n\r\ncloseMenu.addEventListener('click', function () {\r\n    header.classList.remove('open-menu')\r\n});\r\n/* humb end */\r\n\r\n/* show posts */\r\n\r\nconst btnShowPosts = document.querySelector('.btn-show-posts');\r\nconst posts = document.querySelector('.posts');\r\n\r\nbtnShowPosts.addEventListener('click', function () {\r\n\r\n    if (posts.classList.contains('show-posts')) {\r\n        posts.classList.remove('show-posts');\r\n        posts.classList.add('out-posts');\r\n    } else {\r\n        posts.classList.remove('out-posts');\r\n        posts.classList.add('show-posts');\r\n    }\r\n\r\n});\r\n\r\n/* show posts end*/\r\n\r\n/* slider */\r\nconst slider = document.querySelectorAll('.slide');\r\nconst navSlider = document.querySelector('.nav-slider');\r\n\r\nfor(let i = 0; i < slider.length; i++) {\r\n    if(i === 0) {\r\n        navSlider.insertAdjacentHTML('beforeEnd', '<button class=\"nav-slider__item nav-slider__item_active\"></button>');\r\n    } else {\r\n        navSlider.insertAdjacentHTML('beforeEnd', '<button class=\"nav-slider__item\"></button>');\r\n    }\r\n}\r\n\r\nconst navItems = document.querySelectorAll('.nav-slider__item');\r\n\r\nfor(let i = 0; i < slider.length; i++) {\r\n\r\n    navItems[i].addEventListener('click', function () {\r\n\r\n        for(let i = 0; i < slider.length; i++) {\r\n            navItems[i].classList.remove('nav-slider__item_active');\r\n            slider[i].classList.remove('slide-show');\r\n        }\r\n\r\n        this.classList.add('nav-slider__item_active');\r\n        slider[i].classList.add('slide-show');\r\n    })\r\n\r\n}\r\n/* slider end */\r\n\r\n\n\n//# sourceURL=webpack://adci-test/./src/index.js?");
/******/ })()
;