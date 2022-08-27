import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27577989-542c01d54ae3e84008c27bc5b';
const apiParametres = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  page: 1,
};

let lastPage = false;

async function fetchImages(query = '', page = 1) {
  apiParametres.q = query;
  apiParametres.page = page;

  return axios
    .get(BASE_URL, { params: apiParametres })
    .then(({ data }) => {
      lastPage =
        Math.ceil(data.totalHits / apiParametres.per_page) ===
        apiParametres.page;
      return data.hits;
    })

    .catch(error => console.log('error', error));
}

function isLastPage() {
  return lastPage;
}

export { fetchImages, isLastPage };
