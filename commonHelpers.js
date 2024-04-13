import{a as f,A as y,S as h}from"./assets/vendor-f3dd115c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();async function v(){const n="https://portfolio-js.b.goit.study/api/reviews";try{const r=await f.get(n);if(r.status===200)return r.data.map(({_id:s,author:i,avatar_url:m,review:p})=>({author:i,avatar_url:m,review:p}));throw new Error("Server responded with status:",r.status)}catch(r){throw console.error("There was a problem with the request:",r),r}}async function L(e,t){const o="https://portfolio-js.b.goit.study/api/requests";try{const s=await f.post(o,{email:e,comment:t});if(s.status===201)return s.data;throw new Error("Server responded with status:",s.status)}catch(s){throw console.error("There was a problem with the request:",s),s}}const a=document.querySelector("#myModal"),g=document.querySelector("#myBtn"),w=document.querySelector(".close");g.onclick=function(){a.style.display="block"};w.onclick=function(){a.style.display="none"};document.onclick=function(e){e.target===a&&(a.style.display="none")};document.addEventListener("keydown",E);function E(e){(e.key==="Escape"||e.key==="Esc")&&(a.style.display="none")}new y(".accordion-container",{duration:400,showMultiple:!0,openOnInit:[0],onOpen:function(e){e.querySelector("svg.ac-icon").classList.add("ac-icon-active")},onClose:function(e){e.querySelector("svg.ac-icon").classList.remove("ac-icon-active")}});new h(".swiper",{navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"}});const d=document.querySelectorAll(".faq-title"),S=document.querySelectorAll(".accordion-open");d.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector("#"+e.getAttribute("data-tab"));t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(S.forEach(n=>{n.classList.remove("active"),n.style.maxHeight=0}),d.forEach(n=>n.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")})});async function q(){try{const e=await v();console.log(e)}catch(e){console.error("Error fetching reviews:",e)}}q();const u=document.querySelector(".footer-form"),l=document.querySelector(".footer-backdrop"),b=document.querySelector(".footer-modal-response"),A=document.querySelector(".footer-modal-close-btn"),k=document.querySelector("#userEmail"),c=document.querySelector(".footer-form-fields-wrapper");u.addEventListener("submit",N);l.addEventListener("click",T);A.addEventListener("click",C);document.addEventListener("keydown",B);k.addEventListener("blur",D);function O(e){return`<h3 class="footer-modal-title">${e.title}</h3>
                  <p class="footer-modal-content">${e.message}</p>`}async function N(e){e.preventDefault();try{const t=u.elements.userEmail.value.trim(),n=u.elements.userComment.value.trim(),r=await L(t,n),o=O(r);l.classList.add("is-open"),b.innerHTML=o,e.target.reset()}catch(t){console.error("Error sending cooperation request:",t)}}function T(e){e.target===e.currentTarget&&l.classList.remove("is-open")}function C(e){l.classList.remove("is-open")}function B(e){e.code==="Escape"&&l.classList.remove("is-open")}function D(e){const t=e.currentTarget.value.trim();e.target.classList.contains("input-after-green")?(c.classList.remove("input-after-green"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?c.classList.add("input-after-green"):c.classList.add("input-after-red")):(c.classList.remove("input-after-red"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?c.classList.add("input-after-green"):c.classList.add("input-after-red"))}
//# sourceMappingURL=commonHelpers.js.map
