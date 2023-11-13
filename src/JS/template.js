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