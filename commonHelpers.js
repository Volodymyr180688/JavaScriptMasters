import{a as w,S as p,i as E}from"./assets/vendor-774547bf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();async function S(){const o="https://portfolio-js.b.goit.study/api/reviews";try{const r=await w.get(o);if(r.status===200)return r.data.map(({_id:s,author:l,avatar_url:L,review:b})=>({author:l,avatar_url:L,review:b}));throw new Error("Server responded with status:",r.status)}catch(r){throw console.error("There was a problem with the request:",r),r}}async function q(e,t){const n="https://portfolio-js.b.goit.study/api/requests";try{const s=await w.post(n,{email:e,comment:t});if(s.status===201)return s.data;throw new Error("Server responded with status:",s.status)}catch(s){throw console.error("There was a problem with the request:",s),s}}const d=document.querySelector("#myModal"),A=document.querySelector("#myBtn"),x=document.querySelector(".close");document.querySelector(".modal-content");A.onclick=function(){d.style.display="block"};x.onclick=function(){d.style.display="none"};document.onclick=function(e){e.target===d&&(d.style.display="none")};document.addEventListener("keydown",k);function k(e){(e.key==="Escape"||e.key==="Esc")&&(d.style.display="none")}const B=document.querySelector(".menu"),T=document.querySelectorAll(".menu-list"),i=document.querySelector(".hidden-menu");B.addEventListener("click",I);function I(e){i.classList.contains("hidden-menu")?(i.classList.remove("hidden-menu"),i.classList.add("visible-menu")):(i.classList.remove("visible-menu"),i.classList.add("hidden-menu")),e.stopPropagation()}T.forEach(e=>{e.addEventListener("click",C)});function C(e){i.classList.remove("visible-menu"),i.classList.add("hidden-menu"),e.stopPropagation()}document.addEventListener("click",P);function P(){i.classList.remove("visible-menu"),i.classList.add("hidden-menu")}const f=document.querySelectorAll(".about-me-title"),H=document.querySelectorAll(".accordion-open-about-me");f.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector("#"+e.getAttribute("data-tab"));t.classList.contains("active")?(t.classList.remove("active"),t.classList.add("accordion-open-about-me"),t.style.maxHeight=0):(H.forEach(o=>{o.classList.remove("active"),o.style.maxHeight=0}),f.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")})});const $=document.querySelector(".about-button-wrapper");new p(".swiper-container",{navigation:{nextEl:$,mousewheel:!0},loop:!0,direction:"horizontal",watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:"auto",on:{slideChangeTransitionEnd:function(){var e=document.querySelectorAll(".swiper-item");e.forEach(function(r){r.classList.remove("active")});var t=this.activeIndex,o=e[t];o.classList.add("active")}}});const v=new p(".swiper",{navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},spaceBetween:30,centeredSlides:!0,slidesPerView:"auto",autoHeight:!0,on:{slideChangeTransitionEnd:function(){const e=document.querySelector(".next-btn"),t=document.querySelector(".prev-btn");v.isEnd?e.disabled=!0:e.disabled=!1,v.isBeginning?t.disabled=!0:t.disabled=!1}}}),h=document.querySelectorAll(".faq-title"),O=document.querySelectorAll(".accordion-open");h.forEach(e=>e.addEventListener("click",()=>{const t=e.children[1];t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(O.forEach(o=>{o.classList.remove("active"),o.style.maxHeight=0}),h.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));function N(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function D(e){document.querySelectorAll(".marquee__line").forEach(o=>{o.style.animationPlayState=e?"running":"paused"})}function g(){const e=document.querySelector(".covers-section"),t=N(e);D(t)}window.addEventListener("load",g);window.addEventListener("scroll",g);async function _(){try{const e=await S(),t=document.querySelector(".reviews-list"),o=e.map(r=>`
    <li class="reviews-list-item swiper-slide">
      <img class="avatar_url" src=${r.avatar_url} width="48" alt="icon user">
      <h3 class="author"> ${r.author}</h3>
      <p class="review"> ${r.review}</p>
    </li>`).join("");t.insertAdjacentHTML("beforeend",o)}catch(e){window.alert("Error fetching reviews:",e)}}_();const y=new p(".reviws-swiper",{navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},centeredSlidesPerView:!0,slidesPerView:"auto",spaceBetween:30,on:{slideChangeTransitionEnd:function(){const e=document.querySelector(".reviews-next-btn"),t=document.querySelector(".reviews-prev-btn");y.isEnd?e.disabled=!0:e.disabled=!1,y.isBeginning?t.disabled=!0:t.disabled=!1}}}),m=document.querySelector(".footer-form"),u=document.querySelector(".footer-backdrop"),R=document.querySelector(".footer-modal-response"),V=document.querySelector(".footer-modal-close-btn"),c=document.querySelector(".green-or-red-bottom-line"),z=document.querySelector("#userEmail"),a=document.querySelector(".footer-form-fields-wrapper");m.addEventListener("submit",U);u.addEventListener("click",Z);V.addEventListener("click",j);document.addEventListener("keydown",W);z.addEventListener("blur",F);function M(e){return`<h3 class="footer-modal-title">${e.title}</h3>
                  <p class="footer-modal-content">${e.message}</p>`}async function U(e){e.preventDefault();try{const t=m.elements.userEmail.value.trim(),o=m.elements.userComment.value.trim(),r=await q(t,o),n=M(r);u.classList.add("is-open"),R.innerHTML=n,a.classList.contains("input-after-green")&&c.classList.contains("border-bottom-color-green")&&(a.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green")),e.target.reset()}catch{E.error({position:"topCenter",title:"Error",message:"❌ Something went wrong. Try again later."})}}function Z(e){e.target===e.currentTarget&&u.classList.remove("is-open")}function j(e){u.classList.remove("is-open")}function W(e){e.code==="Escape"&&u.classList.remove("is-open")}function F(e){const t=e.currentTarget.value.trim();e.target.classList.contains("input-after-green")&&e.target.classList.contains("border-bottom-color-green")?(a.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(a.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(a.classList.add("input-after-red"),c.classList.add("border-bottom-color-red"))):(a.classList.remove("input-after-red"),c.classList.remove("border-bottom-color-red"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(a.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(a.classList.add("input-after-red"),c.classList.add("border-bottom-color-red")))}
//# sourceMappingURL=commonHelpers.js.map
