(()=>{"use strict";const e=document.querySelector(".overlay_modal"),t=document.querySelector(".btn-reservation"),s=document.querySelector(".close-modal");t.addEventListener("click",(function(){e.classList.add("open")})),s.addEventListener("click",(function(){e.classList.remove("open")}));const o=document.querySelector(".humb"),n=document.querySelector(".header-page"),c=document.querySelector(".close-menu");o.addEventListener("click",(function(){n.classList.add("open-menu")})),c.addEventListener("click",(function(){n.classList.remove("open-menu")}));const l=document.querySelector(".btn-show-posts"),i=document.querySelector(".posts");l.addEventListener("click",(function(){i.classList.contains("show-posts")?(i.classList.remove("show-posts"),i.classList.add("out-posts")):(i.classList.remove("out-posts"),i.classList.add("show-posts"))}));const r=document.querySelectorAll(".slide"),d=document.querySelector(".nav-slider");for(let e=0;e<r.length;e++)0===e?d.insertAdjacentHTML("beforeEnd",'<button class="nav-slider__item nav-slider__item_active"></button>'):d.insertAdjacentHTML("beforeEnd",'<button class="nav-slider__item"></button>');const a=document.querySelectorAll(".nav-slider__item");for(let e=0;e<r.length;e++)a[e].addEventListener("click",(function(){for(let e=0;e<r.length;e++)a[e].classList.remove("nav-slider__item_active"),r[e].classList.remove("slide-show");this.classList.add("nav-slider__item_active"),r[e].classList.add("slide-show")}))})();