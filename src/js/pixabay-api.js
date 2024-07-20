import { createListMarkup } from './render-functions';
import { gallery } from './render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const myApiKey = '44934541-86fe3f4b652536370b4b9d239';
axios.defaults.params = {};

export async function fetchImageName(query) {
  try {
    const response = await axios.get('', {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: '15',
        page: '1',
      },
    });

    const data = response.data;
    if (data.hits.length === 0) {
      throw new Error('No images found');
    }

    const listMarkup = createListMarkup(data.hits);
    gallery.insertAdjacentHTML('beforeend', listMarkup);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });
    console.error('Error:', error.message);
  }
}
