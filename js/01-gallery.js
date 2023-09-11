import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// ! VERSION 2
const list = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }

  const currentImage = event.target.closest(".gallery__item");
  const product = galleryItems.find(
    ({ source }) => source === currentImage.dataset.source
  );
  console.log(product);

  const instance = basicLightbox.create(`<img
      class="gallery__image"
      src=${product.preview}
      data-source=${product.original}
      alt=${product.description}
    />`);

  instance.show();
  window.addEventListener("keydown", onKeyDownClose);

  function onKeyDownClose(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onKeyDownClose);
    }
  }
}
