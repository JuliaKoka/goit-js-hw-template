import{a as u,i as n,S as g}from"./assets/vendor-f144e563.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".gallery-list");function h({webformatURL:r,largeImageURL:a,tags:o,likes:s,views:e,comments:t,downloads:i}){const p=o.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href=${a}>
  <img class="gallery-image" src=${r} data-source=${a} alt=${p}>
  </a>
  </div>
  <div class="img-data">
  <ul class="img-data-list">
  <li class="img-data-element">
  <p class="img-data-fetched">Likes: </p>
  <p class="img-data-fetched">${s}</p>
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
  </li>`}function y(r){return r.map(h).join("")}u.defaults.baseURL="https://pixabay.com/api/";const b="44934541-86fe3f4b652536370b4b9d239";async function L(r,a){try{const s=(await u.get("",{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:a}})).data;if(s.hits.length===0)throw new Error("No images found");const e=y(s.hits);m.insertAdjacentHTML("beforeend",e),s.totalHits>a*15?document.querySelector(".load-more-btn").hidden=!1:(document.querySelector(".load-more-btn").hidden=!0,n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),console.error("Error:",o.message)}}const S=document.querySelector("form"),v=document.querySelector(".load-more-btn"),d=document.querySelector(".loader");let l="",c=1;S.addEventListener("submit",q);v.addEventListener("click",w);function q(r){if(r.preventDefault(),l=r.target.elements["user-input"].value,l===""){n.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}m.innerHTML="",c=1,f()}function w(){c+=1,f()}function f(){d.hidden=!1,L(l,c).finally(()=>{d.hidden=!0,new g(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()})}
//# sourceMappingURL=commonHelpers.js.map
