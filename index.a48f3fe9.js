function e(e){const t=document.createDocumentFragment();return e.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,t.appendChild(n)})),t}const t=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds?api_key=live_ibyatNn5rBNHwb6AHoqh0GOz6MVW1AxK9xW3tFtu9yqqZGf7HBgRAGozmXPh2oNq").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((n=>{const o=e(n);t.appendChild(o)})).catch((e=>console.log(e)));
//# sourceMappingURL=index.a48f3fe9.js.map