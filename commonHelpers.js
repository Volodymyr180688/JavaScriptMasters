import{a as i}from"./assets/vendor-34f890c2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();async function l(){const n="https://portfolio-js.b.goit.study/api/reviews";try{const o=await i.get(n);if(o.status===200)return o.data.map(({_id:e,author:c,avatar_url:a,review:u})=>({author:c,avatar_url:a,review:u}));throw new Error("Server responded with status:",o.status)}catch(o){throw console.error("There was a problem with the request:",o),o}}async function d(r,s){const t="https://portfolio-js.b.goit.study/api/requests";try{const e=await i.post(t,{email:r,comment:s});if(e.status===201)return e.data;throw new Error("Server responded with status:",e.status)}catch(e){throw console.error("There was a problem with the request:",e),e}}async function f(){try{const r=await l();console.log(r)}catch(r){console.error("Error fetching reviews:",r)}}f();async function p(){try{const n=await d("test@gmail.com","User's comment");console.log(n)}catch(r){console.error("Error sending cooperation request:",r)}}p();
//# sourceMappingURL=commonHelpers.js.map
