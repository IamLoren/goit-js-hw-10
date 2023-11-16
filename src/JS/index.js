import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import { createOptions, createMarkup } from './template.js';

const select = document.querySelector('.breed-select');
const arrow = document.querySelector('svg');
const catCard = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');

fetchBreeds()
  .then(res => {
    select.classList.remove('is-hidden');
    const fragment = createOptions(res);
    select.insertAdjacentHTML('beforeend', `<option>Select a cat breed<option/>`)
    select.appendChild(fragment);
  })
  .catch(err => {
    console.log(err)
    errorMessage.classList.remove('is-hidden');
})
  .finally(() => {
    loader.classList.add('is-hidden');  
  });

select.addEventListener('change', () => {
        loader.classList.remove('is-hidden');
        catCard.classList.add('is-hidden');
        const choiseOfCat = select.value;
    fetchCatByBreed(choiseOfCat)
    .then(res => {  
       catCard.classList.remove('is-hidden'); 
       const card = createMarkup(res[0]);
       catCard.innerHTML = card;
    })
    .catch(err => {
        console.log(err)
        errorMessage.classList.remove('is-hidden');
    })
    .finally(() => {
        loader.classList.add('is-hidden');
    });
})