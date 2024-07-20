import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery-list");function f({webformatURL:i,largeImageURL:a,tags:s,likes:r,views:e,comments:t,downloads:o}){const d=s.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href=${a}>
  <img class="gallery-image" src=${i} data-source=${a} alt=${d}>
  </a>
  </div>
  <div class="img-data">
  <ul class="img-data-list">
  <li class="img-data-element">
  <p class="img-data-fetched">Likes: </p>
  <p class="img-data-fetched">${r}</p>
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
  </li>`}function m(i){return i.map(f).join("")}function p(i){const s=`https://pixabay.com/api/?key=44934541-86fe3f4b652536370b4b9d239&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("404");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("404!");const e=m(r.hits);n.insertAdjacentHTML("beforeend",e)}).catch(r=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"})})}const c=document.querySelector("form");document.querySelector(".loading-indicator");c.addEventListener("submit",g);function g(i){i.preventDefault();const s=i.target.elements["user-input"].value;if(s===""){l.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}n.innerHTML="",p(s).finally(()=>{new u(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
