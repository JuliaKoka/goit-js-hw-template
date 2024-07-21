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
  fetchNewPage();
}

function handleLoadMore() {
  page += 1;
  fetchNewPage();
}

function fetchNewPage() {
  loadingIndicator.hidden = false;
  fetchImageName(searchQuery, page).finally(() => {
    loadingIndicator.hidden = true;
    const lightbox = new SimpleLightbox('.gallery-list a', {
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();

    if (page > 1) {
      const { height: heightOfElement } = document.querySelector('.gallery');
      window.scrollBy({
        top: heightOfElement * 2,
        behavior: 'smooth',
      });
    }
  });

  form.reset();
}
