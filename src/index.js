import gallery from './gallery-items.js';
//console.log(gallery);

const refs = {
    listGallery: document.querySelector('.js-gallery'),
    modalWindow: document.querySelector('.js-lightbox'),
    closeModalWindow: document.querySelector('[data-action="close-lightbox"]'),
    largeImageRef: document.querySelector('.lightbox__image'),
    closeOverModal: document.querySelector('.lightbox__overlay')
};

const creatListGallery = gallery.map(creatListGallerys => {
    creatListGallerys = `<li class="gallery__item"><a class="gallery__link" href='${creatListGallerys.original}'><img class="gallery__image" src = "${creatListGallerys.preview}" data-source = "${creatListGallerys.original}" alt = "${creatListGallerys.description}"></img></a></li>`;
    return creatListGallerys;
});
refs.listGallery.insertAdjacentHTML('afterbegin', creatListGallery.join(' '));

refs.listGallery.addEventListener('click', handleGalleryClick)
refs.closeModalWindow.addEventListener('click', closeModalRef)
refs.closeOverModal.addEventListener('click', closeModalRef)


function handleGalleryClick(event) {
    event.preventDefault();
    const target = event.target;
    console.log(target.nodeName);
    if (target.nodeName !== 'IMG') {
        return
    }
    console.log(target.dataset.source)
    modalRef(event.target);

}

function modalRef(openModal) {
    window.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            closeModalRef();
        };
    });

    refs.modalWindow.classList.add('is-open');
    const largeImg = openModal.dataset.source;
    refs.largeImageRef.src = largeImg
}

function closeModalRef() {
    refs.modalWindow.classList.remove('is-open');
    refs.largeImageRef.src = '';
}