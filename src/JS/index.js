import { fetchBreeds } from './cat-api.js';
import { createOptions } from './template.js';

const select = document.querySelector('.breed-select');


fetchBreeds()
  .then(res => {
    const fragment = createOptions(res);
    select.appendChild(fragment);
  })
  .catch(err => console.log(err));


