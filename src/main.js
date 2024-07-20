// import { fetchImageName } from './js/pixabay-api';
// import { gallery } from './js/render-functions.js';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const form = document.querySelector('form');
// const loadMoreBtn = document.querySelector('.load-more-btn');
// const loadingIndicator = document.querySelector('.loader');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const formKey = event.target;
//   const inputValue = formKey.elements['user-input'].value;
//   if (inputValue === '') {
//     iziToast.warning({
//       title: 'Caution',
//       message: 'Please fill in the form',
//       position: 'topRight',
//       backgroundColor: '#ef4040',
//     });
//     return;
//   }

//   gallery.innerHTML = '';

//   fetchImageName(inputValue).finally(() => {
//     const lightbox = new SimpleLightbox('.gallery-list a', {
//       captionsData: 'alt',
//       captionDelay: 250,
//     }).refresh();
//   });

//   form.reset();
// }

import { fetchImageName } from './js/pixabay-api';
import { gallery } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loadingIndicator = document.querySelector('.loader');

let searchQuery = '';
let page = 1;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

function handleSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.elements['user-input'].value;
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please fill in the form',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });
    return;
  }

  gallery.innerHTML = '';
  page = 1;
  fetchImages();
}

function handleLoadMore() {
  page += 1;
  fetchImages();
}

function fetchImages() {
  loadingIndicator.hidden = false;
  fetchImageName(searchQuery, page).finally(() => {
    loadingIndicator.hidden = true;
    const lightbox = new SimpleLightbox('.gallery-list a', {
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();
  });
}
