import { createListMarkup } from './render-functions';
import { gallery } from './render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchImageName(query) {
  const myApiKey = '44934541-86fe3f4b652536370b4b9d239';
  const url = `https://pixabay.com/api/?key=${myApiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('404');
      }
      return res.json();
    })
    .then(data => {
      //   console.log(data);
      if (data.hits.length === 0) {
        throw new Error('404!');
      }
      const listMarkup = createListMarkup(data.hits);
      gallery.insertAdjacentHTML('beforeend', listMarkup);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#ef4040',
      });
      //   window.alert(error.message);
      //   console.error('Error:', error.message);
    });
}
