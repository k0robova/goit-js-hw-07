import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const list = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} alt=${description} />
  </a>
</li>`
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  const gallery = new SimpleLightbox(".gallery__item a", {
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

  // console.log(gallery.captionsData);
}
