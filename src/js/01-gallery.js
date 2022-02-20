// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector(".gallery");

const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `<a class="gallery__item"
   href='${original}'>
   <img class="gallery__image"
   src='${preview}' 
   alt='${description}' />
</a>`;
}

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
 galleryContainer.insertAdjacentHTML('afterbegin', makeGalleryMarkup);


const lightbox = new SimpleLightbox('.gallery a',
    {
        captions: true,
        captionsData: 'alt',
        cationDelay: '250ms',
    });



const closeModal = (event) => {

   const containerIMG = document.querySelector('.modal');
  // console.log(event)
  
  if (event.code === 'Escape')  {
    instance.close();
  }
 
}


