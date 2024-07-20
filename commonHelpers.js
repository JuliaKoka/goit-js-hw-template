import{a as l,i as n,S as u}from"./assets/vendor-f144e563.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery-list");function f({webformatURL:r,largeImageURL:a,tags:s,likes:i,views:e,comments:t,downloads:o}){const m=s.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href=${a}>
  <img class="gallery-image" src=${r} data-source=${a} alt=${m}>
  </a>
  </div>
  <div class="img-data">
  <ul class="img-data-list">
  <li class="img-data-element">
  <p class="img-data-fetched">Likes: </p>
  <p class="img-data-fetched">${i}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Views: </p>
  <p class="img-data-fetched">${e}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Comments: </p>
  <p class="img-data-fetched">${t}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Downloads: </p>
  <p class="img-data-fetched">${o}</p>
  </li>
  </ul>
  </div>
  </li>`}function p(r){return r.map(f).join("")}l.defaults.baseURL="https://pixabay.com/api/";const g="44934541-86fe3f4b652536370b4b9d239";l.defaults.params={};async function y(r){try{const s=(await l.get("",{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:"1"}})).data;if(s.hits.length===0)throw new Error("No images found");const i=p(s.hits);c.insertAdjacentHTML("beforeend",i)}catch(a){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),console.error("Error:",a.message)}}const d=document.querySelector("form");document.querySelector("load-more-btn");document.querySelector(".loading-indicator");d.addEventListener("submit",h);function h(r){r.preventDefault();const s=r.target.elements["user-input"].value;if(s===""){n.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}c.innerHTML="",y(s).finally(()=>{new u(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}),d.reset()}
//# sourceMappingURL=commonHelpers.js.map
