import{a as p,A as g,S as L,i as v}from"./assets/vendor-49391957.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function h(){const n="https://portfolio-js.b.goit.study/api/reviews";try{const s=await p.get(n);if(s.status===200)return s.data.map(({_id:r,author:a,avatar_url:f,review:y})=>({author:a,avatar_url:f,review:y}));throw new Error("Server responded with status:",s.status)}catch(s){throw console.error("There was a problem with the request:",s),s}}async function b(e,o){const t="https://portfolio-js.b.goit.study/api/requests";try{const r=await p.post(t,{email:e,comment:o});if(r.status===201)return r.data;throw new Error("Server responded with status:",r.status)}catch(r){throw console.error("There was a problem with the request:",r),r}}const l=document.querySelector("#myModal"),w=document.querySelector("#myBtn"),E=document.querySelector(".close");w.onclick=function(){l.style.display="block"};E.onclick=function(){l.style.display="none"};document.onclick=function(e){e.target===l&&(l.style.display="none")};document.addEventListener("keydown",S);function S(e){(e.key==="Escape"||e.key==="Esc")&&(l.style.display="none")}new g(".accordion-container",{duration:400,showMultiple:!0,openOnInit:[0],onOpen:function(e){e.querySelector("svg.ac-icon").classList.add("ac-icon-active")},onClose:function(e){e.querySelector("svg.ac-icon").classList.remove("ac-icon-active")}});new L(".swiper",{navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},spaceBetween:30,centeredSlides:!0,slidesPerView:"auto",autoHeight:!0});const m=document.querySelectorAll(".faq-title"),q=document.querySelectorAll(".accordion-open");m.forEach(e=>{e.addEventListener("click",()=>{const o=document.querySelector("#"+e.getAttribute("data-tab"));o.classList.contains("active")?(o.classList.remove("active"),o.style.maxHeight=0):(q.forEach(n=>{n.classList.remove("active"),n.style.maxHeight=0}),m.forEach(n=>n.classList.remove("active")),e.classList.add("active"),o.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px")})});async function A(){try{const e=await h();console.log(e)}catch(e){console.error("Error fetching reviews:",e)}}A();const u=document.querySelector(".footer-form"),d=document.querySelector(".footer-backdrop"),k=document.querySelector(".footer-modal-response"),O=document.querySelector(".footer-modal-close-btn"),c=document.querySelector(".green-or-red-bottom-line"),T=document.querySelector("#userEmail"),i=document.querySelector(".footer-form-fields-wrapper");u.addEventListener("submit",B);d.addEventListener("click",C);O.addEventListener("click",D);document.addEventListener("keydown",I);T.addEventListener("blur",P);function N(e){return`<h3 class="footer-modal-title">${e.title}</h3>
                  <p class="footer-modal-content">${e.message}</p>`}async function B(e){e.preventDefault();try{const o=u.elements.userEmail.value.trim(),n=u.elements.userComment.value.trim(),s=await b(o,n),t=N(s);d.classList.add("is-open"),k.innerHTML=t,i.classList.contains("input-after-green")&&c.classList.contains("border-bottom-color-green")&&(i.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green")),e.target.reset()}catch{v.error({position:"topCenter",title:"Error",message:"❌ Something went wrong. Try again later."})}}function C(e){e.target===e.currentTarget&&d.classList.remove("is-open")}function D(e){d.classList.remove("is-open")}function I(e){e.code==="Escape"&&d.classList.remove("is-open")}function P(e){const o=e.currentTarget.value.trim();e.target.classList.contains("input-after-green")&&e.target.classList.contains("border-bottom-color-green")?(i.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green"),o.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(i.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(i.classList.add("input-after-red"),c.classList.add("border-bottom-color-red"))):(i.classList.remove("input-after-red"),c.classList.remove("border-bottom-color-red"),o.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(i.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(i.classList.add("input-after-red"),c.classList.add("border-bottom-color-red")))}
//# sourceMappingURL=commonHelpers.js.map
