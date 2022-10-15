// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
//console.log(SimpleLightbox);
//console.log(galleryItems);
const galleryDiv = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
  ''
);
galleryDiv.insertAdjacentHTML('beforeend', markup);

const simpleLightbox = window.SimpleLightbox;

const lightbox = new simpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
