import{a as y,S as L,i as h}from"./assets/vendor-3b58022f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();async function b(){const r="https://portfolio-js.b.goit.study/api/reviews";try{const n=await y.get(r);if(n.status===200)return n.data.map(({_id:s,author:a,avatar_url:g,review:v})=>({author:a,avatar_url:g,review:v}));throw new Error("Server responded with status:",n.status)}catch(n){throw console.error("There was a problem with the request:",n),n}}async function w(e,t){const o="https://portfolio-js.b.goit.study/api/requests";try{const s=await y.post(o,{email:e,comment:t});if(s.status===201)return s.data;throw new Error("Server responded with status:",s.status)}catch(s){throw console.error("There was a problem with the request:",s),s}}const l=document.querySelector("#myModal"),E=document.querySelector("#myBtn"),S=document.querySelector(".close");E.onclick=function(){l.style.display="block"};S.onclick=function(){l.style.display="none"};document.onclick=function(e){e.target===l&&(l.style.display="none")};document.addEventListener("keydown",q);function q(e){(e.key==="Escape"||e.key==="Esc")&&(l.style.display="none")}const m=document.querySelectorAll(".about-me-title"),A=document.querySelectorAll(".accordion-open");m.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector("#"+e.getAttribute("data-tab"));t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(A.forEach(r=>{r.classList.remove("active"),r.style.maxHeight=0}),m.forEach(r=>r.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")})});const f=new L(".swiper",{navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},spaceBetween:30,centeredSlides:!0,slidesPerView:"auto",autoHeight:!0,on:{slideChangeTransitionEnd:function(){const e=document.querySelector(".next-btn"),t=document.querySelector(".prev-btn");f.isEnd?e.disabled=!0:e.disabled=!1,f.isBeginning?t.disabled=!0:t.disabled=!1}}}),p=document.querySelectorAll(".faq-title"),k=document.querySelectorAll(".accordion-open");p.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(k.forEach(r=>{r.classList.remove("active"),r.style.maxHeight=0}),p.forEach(r=>r.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));async function x(){try{const e=await b();console.log(e)}catch(e){console.error("Error fetching reviews:",e)}}x();const u=document.querySelector(".footer-form"),d=document.querySelector(".footer-backdrop"),B=document.querySelector(".footer-modal-response"),T=document.querySelector(".footer-modal-close-btn"),c=document.querySelector(".green-or-red-bottom-line"),C=document.querySelector("#userEmail"),i=document.querySelector(".footer-form-fields-wrapper");u.addEventListener("submit",N);d.addEventListener("click",O);T.addEventListener("click",$);document.addEventListener("keydown",D);C.addEventListener("blur",P);function H(e){return`<h3 class="footer-modal-title">${e.title}</h3>
                  <p class="footer-modal-content">${e.message}</p>`}async function N(e){e.preventDefault();try{const t=u.elements.userEmail.value.trim(),r=u.elements.userComment.value.trim(),n=await w(t,r),o=H(n);d.classList.add("is-open"),B.innerHTML=o,i.classList.contains("input-after-green")&&c.classList.contains("border-bottom-color-green")&&(i.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green")),e.target.reset()}catch{h.error({position:"topCenter",title:"Error",message:"❌ Something went wrong. Try again later."})}}function O(e){e.target===e.currentTarget&&d.classList.remove("is-open")}function $(e){d.classList.remove("is-open")}function D(e){e.code==="Escape"&&d.classList.remove("is-open")}function P(e){const t=e.currentTarget.value.trim();e.target.classList.contains("input-after-green")&&e.target.classList.contains("border-bottom-color-green")?(i.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(i.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(i.classList.add("input-after-red"),c.classList.add("border-bottom-color-red"))):(i.classList.remove("input-after-red"),c.classList.remove("border-bottom-color-red"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(i.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(i.classList.add("input-after-red"),c.classList.add("border-bottom-color-red")))}
//# sourceMappingURL=commonHelpers.js.map
