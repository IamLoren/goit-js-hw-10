export function createOptions(arr) {
    const fragment = document.createDocumentFragment();
   arr.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.name;
    fragment.appendChild(option);
   })
return fragment;
}

export function createMarkup(cat) {
    return `
    <div class="cat-card">
    <div class="img-wrapper">
      <img src="${cat.url}" alt="${cat.breeds[0].name}" class="cat-img">
    </div>
    <p class="cat-breed">${cat.breeds[0].name}</p>
    <p class="cat-description">${cat.breeds[0].description}</p>
    <p class="cat-temperament"><span>Temperament: </span>${cat.breeds[0].temperament}</p>
  </div>
    `
}