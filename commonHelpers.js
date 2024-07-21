import{a as m,i as l,S as h}from"./assets/vendor-f144e563.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery-list");function y({webformatURL:r,largeImageURL:a,tags:s,likes:o,views:e,comments:t,downloads:i}){const g=s.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href='${a}'>
  <img class="gallery-image" src='${r}' data-source=${a} alt='${g}'>
  </a>
  </div>
  <div class="img-data">
  <ul class="img-data-list">
  <li class="img-data-element">
  <p class="img-data-fetched">Likes: </p>
  <p class="img-data-fetched">${o}</p>
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
  <p class="img-data-fetched">${i}</p>
  </li>
  </ul>
  </div>
  </li>`}function b(r){return r.map(y).join("")}m.defaults.baseURL="https://pixabay.com/api/";const L="44934541-86fe3f4b652536370b4b9d239";async function S(r,a){try{const o=(await m.get("",{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:a}})).data;if(o.hits.length===0)throw new Error("No images found");a===1&&(c.innerHTML="");const e=b(o.hits);c.insertAdjacentHTML("beforeend",e),o.totalHits>a*15?document.querySelector(".load-more-btn").hidden=!1:(document.querySelector(".load-more-btn").hidden=!0,l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){document.querySelector(".load-more-btn").hidden=!0,l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),console.error("Error:",s.message)}}const f=document.querySelector("form"),q=document.querySelector(".load-more-btn"),u=document.querySelector(".loader");let d="",n=1;f.addEventListener("submit",v);q.addEventListener("click",w);function v(r){if(r.preventDefault(),d=r.target.elements["user-input"].value,d===""){l.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}c.innerHTML="",n=1,p()}function w(){n+=1,p()}function p(){u.hidden=!1,S(d,n).finally(()=>{if(u.hidden=!0,new h(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh(),n>1){const{height:r}=document.querySelector(".gallery");window.scrollBy({top:r*2,behavior:"smooth"})}}),f.reset()}
//# sourceMappingURL=commonHelpers.js.map
